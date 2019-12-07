const { mapCollection } = require('./helpers'),
	{ noParam } = require('./constants'),
	{ validateIsIterable, validateIsFunction } = require('./validation');

/**
 * Async Map
 * Map an array asynchronously and resolve when all callbacks are resolved
 * Will map independently from order when callbacks are async
 * @async
 * @param {Function} callback - callback(currentValue, index, array)
 * @param {Object} [thisArg] - must be iterable
 * @return {Array}
 * @throws {TypeError}
 */
module.exports = async function asyncMap(callback, thisArg = noParam) {
	const collection = thisArg !== noParam ? thisArg : this;

	validateIsFunction(callback);
	validateIsIterable(collection);

	return Promise.all(mapCollection(collection, callback));
};
