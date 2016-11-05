'use strict'

const assert = require('chai').assert
const requireValidOptionalObject = require('../lib/require-valid-optional-object')

describe('require valid optional object', function () {

    it('should return empty object if no argument is passed', function () {
        assert.deepEqual(requireValidOptionalObject(), {})
    })

    it('should throw an error if argument is not an object', function () {
        assert.throws(function () {
            requireValidOptionalObject(null)
        }, Error)
        assert.throws(function () {
            requireValidOptionalObject(NaN)
        }, Error)
        assert.throws(function () {
            requireValidOptionalObject([])
        }, Error)
        assert.throws(function () {
            requireValidOptionalObject('')
        }, Error)
        assert.throws(function () {
            requireValidOptionalObject(0)
        }, Error)
        assert.throws(function () {
            requireValidOptionalObject(1)
        }, Error)
        assert.throws(function () {
            requireValidOptionalObject(Infinity)
        }, Error)
    })
})