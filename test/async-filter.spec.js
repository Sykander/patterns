const { expect } = require('./support/chai'),
	{ getArray } = require('./support/data-factory'),
	{
		getSyncCallback,
		getAsyncCallback,
		getErrorCallback
	} = require('./support/helpers'),
	asyncFilterFunction = require('../src/async-filter');

context('Async Filter', function() {
	let array, asyncFilter;

	beforeEach(() => {
		(array = getArray()), (asyncFilter = asyncFilterFunction.bind(array));
	});

	describe('Given no arguments', function() {
		it('Should reject with "TypeError: undefined is not a function"', async function() {
			await expect(asyncFilter()).to.rejectedWith(
				'undefined is not a function'
			);
		});
	});

	describe('Given a synchronous callback', function() {
		let result, callback, filteredArray;

		beforeEach(async () => {
			({ result, callback } = getSyncCallback());

			filteredArray = await asyncFilter(callback);
		});

		it('Should run each callback in order', async function() {
			result.every(({ index: expectedIndex }, actualIndex) =>
				expect(actualIndex).to.equal(expectedIndex)
			);
		});

		it('Should filter each item based on callback result', async function() {
			return array.every(item => {
				if (item) {
					return expect(filteredArray).to.contain(item);
				} else {
					return expect(filteredArray).to.not.contain(item);
				}
			});
		});

		it('Should resolve to a new array', async function() {
			expect(filteredArray).to.not.equal(array);
		});
	});

	describe('Given a sychronous callback and array', function() {
		let result, callback, filteredArray;

		beforeEach(async () => {
			({ result, callback } = getSyncCallback());

			filteredArray = await asyncFilter(callback, array);
		});

		it('Should filter each item based on callback result', async function() {
			return array.every(item => {
				if (item) {
					return expect(filteredArray).to.contain(item);
				} else {
					return expect(filteredArray).to.not.contain(item);
				}
			});
		});

		it('Should run each callback in order', async function() {
			result.every(({ index: expectedIndex }, actualIndex) =>
				expect(actualIndex).to.equal(expectedIndex)
			);
		});

		it('Should resolve to a new array', async function() {
			expect(filteredArray).to.not.equal(array);
		});
	});

	describe('Given an async callback', function() {
		let result, callback, filteredArray;

		beforeEach(async () => {
			({ result, callback } = getAsyncCallback());

			filteredArray = await asyncFilter(callback, array);
		});

		it('Should filter each item based on callback result', async function() {
			return array.every(item => {
				if (item) {
					return expect(filteredArray).to.contain(item);
				} else {
					return expect(filteredArray).to.not.contain(item);
				}
			});
		});

		it('Should run each callback in order', async function() {
			result.every(({ index: expectedIndex }, actualIndex) =>
				expect(actualIndex).to.equal(expectedIndex)
			);
		});

		it('Should resolve to a new array', async function() {
			expect(filteredArray).to.not.equal(array);
		});
	});

	describe('Given an async callback and array', function() {
		let result, callback, filteredArray;

		beforeEach(async () => {
			({ result, callback } = getAsyncCallback());

			filteredArray = await asyncFilter(callback, array);
		});

		it('Should filter each item based on callback result', async function() {
			return array.every(item => {
				if (item) {
					return expect(filteredArray).to.contain(item);
				} else {
					return expect(filteredArray).to.not.contain(item);
				}
			});
		});

		it('Should run each callback in order', async function() {
			result.every(({ index: expectedIndex }, actualIndex) =>
				expect(actualIndex).to.equal(expectedIndex)
			);
		});

		it('Should resolve to a new array', async function() {
			expect(filteredArray).to.not.equal(array);
		});
	});

	describe('Given a callback that throws an error', function() {
		const { callback, string } = getErrorCallback();

		it('Should reject with that error', async function() {
			await expect(asyncFilter(callback)).to.rejectedWith(string);
		});
	});

	describe('Given a callback that throws an error and an array', function() {
		const { callback, string } = getErrorCallback();

		it('Should reject with that error', async function() {
			await expect(asyncFilter(callback, array)).to.rejectedWith(string);
		});
	});

	describe('Given a callback that uses additional parameters', function() {
		let result, callback;

		beforeEach(async () => {
			({ result, callback } = getSyncCallback());

			await asyncFilter(callback);
		});

		it('Should have the correct element', async function() {
			return array.every((item, index) =>
				expect(item).to.equal(result[index].item)
			);
		});

		it('Should have correct index for each callback', async function() {
			return array.every((item, index) =>
				expect(index).to.equal(result[index].index)
			);
		});

		it('Should have access to the source array', async function() {
			return array.every((item, index) =>
				expect(array).to.equal(result[index].array)
			);
		});
	});
});
