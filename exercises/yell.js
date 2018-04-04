'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

const whisper = string => string.toUpperCase()

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('bla'), 'BLA')
//* End of tests

