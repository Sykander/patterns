/**
 * Validate an item's iterability
 * @param {any} item
 * @throws {TypeError}
 */
function validateIsIterable(item) {
	if (typeof item !== 'object' || !item || !item[Symbol.iterator]) {
		throw TypeError(`${item} is not iterable`);
	}

	return true;
}

/**
 * Validate an item is a function
 * @param {any} item
 * @throws {TypeError}
 */
function validateIsFunction(item) {
	if (typeof item !== 'function') {
		throw TypeError(`${item} is not a function`);
	}

	return true;
}

module.exports = { validateIsIterable, validateIsFunction };
