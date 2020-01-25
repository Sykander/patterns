const { mapIterable } = require('./helpers'),
	{ noParam } = require('./constants'),
	{ validateIsIterable, validateIsFunction } = require('./validation');

/**
 * Async Map
 * =========
 * Map an iterable object asynchronously and resolve when all callbacks are resolved
 * @async
 * @param {Function} callback - callback(currentValue, index, array)
 * @param {Object} [thisArg]
 * @return {Array}
 * @throws {TypeError}
 */
module.exports = async function asyncMap(callback, thisArg = noParam) {
	validateIsIterable(this);
	validateIsFunction(callback);

	return Promise.all(
		mapIterable(
			this,
			callback.bind(thisArg !== noParam ? thisArg : undefined),
			{ useEmptyElements: false, newlyAddedElements: false }
		)
	);
};
