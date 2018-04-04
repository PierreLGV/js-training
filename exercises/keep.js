'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = str => str.slice(0, 2)
const keepLast = str => str.slice(-2)
const keepFirstLast = str => str.slice(2, 4)
   



//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(keepFirst(`lamama`), `la`)
assert.strictEqual(keepLast(`lamama`), `ma`)
assert.strictEqual(keepFirstLast(`langevin`), `ng`)
// End of tests */
