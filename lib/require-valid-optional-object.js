'use strict'

/* public functions */
module.exports = requireValidOptionalObject

/**
 * @function requireValidOptionalObject
 *
 * require arg to be an object. if arg is not defined then default to empty
 * object.
 *
 * @param {object} arg
 *
 * @returns {object}
 *
 * @throws {Error}
 */
function requireValidOptionalObject (arg) {
    // if arg is undefined then return empty object
    if (arg === undefined) {
        return {}
    }
    // throw error if arg is not an object
    if (!arg || typeof arg !== 'object' || Array.isArray(arg)) {
        throw new Error('argument error: argument must be an object')
    }
    // return validated object
    return arg
}