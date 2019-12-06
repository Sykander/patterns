const { expect } = require('./support/chai'),
	{ getArray, getString } = require('./support/helpers'),
	asyncForEachFunction = require('../src/async-for-each');

context('Async For Each', function() {
	let array, asyncForEach;

	beforeEach(() => {
		(array = getArray()), (asyncForEach = asyncForEachFunction.bind(array));
	});

	describe('Given no arguments', function() {
		it('Should reject with "TypeError: undefined is not a function"', async function() {
			await expect(asyncForEach()).to.rejectedWith(
				'undefined is not a function'
			);
		});
	});

	describe('Given a non-async callback', function() {
		let result, callback;

		before(() => {
			(result = []), (callback = item => result.push(item));
		});

		it('Should run each callback in order', async function() {
			const expectedResult = array.slice();

			await asyncForEach(callback);

			expectedResult.every((expectedItem, index) =>
				expect(expectedItem).to.equal(result[index])
			);
		});
	});

	describe('Given a non-async callback and array', function() {
		let result, callback;

		before(() => {
			(result = []), (callback = item => result.push(item));
		});

		it('Should run each callback in order', async function() {
			const expectedResult = array.slice();

			await asyncForEach(callback, array);

			expectedResult.every((expectedItem, index) =>
				expect(expectedItem).to.equal(result[index])
			);
		});
	});

	describe('Given an async callback', function() {
		let result, callback;

		before(() => {
			(result = []),
				(callback = item =>
					new Promise(resolve =>
						setTimeout(() => resolve(result.push(item)), 0)
					));
		});

		it('Should run each callback independently of order', async function() {
			const expectedResult = array.slice();

			await asyncForEach(callback);

			expectedResult.every(item => expect(result).to.contain(item));
		});
	});

	describe('Given an async callback and array', function() {
		let result, callback;

		before(() => {
			(result = []),
				(callback = item =>
					new Promise(resolve =>
						setTimeout(() => resolve(result.push(item)), 0)
					));
		});

		it('Should run each callback independently of order', async function() {
			const expectedResult = array.slice();

			await asyncForEach(callback, array);

			expectedResult.every(item => expect(result).to.contain(item));
		});
	});

	describe('Given a callback that throws an error', function() {
		const string = getString(),
			error = new Error(string),
			callback = () => {
				throw error;
			};

		it('Should reject with that error', async function() {
			await expect(asyncForEach(callback)).to.rejectedWith(string);
		});
	});

	describe('Given a callback that throws an error and an array', function() {
		const string = getString(),
			error = new Error(string),
			callback = () => {
				throw error;
			};

		it('Should reject with that error', async function() {
			await expect(asyncForEach(callback, array)).to.rejectedWith(string);
		});
	});
});
