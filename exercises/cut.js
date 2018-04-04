'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */
const cutFirst = str => str.slice(0, -2)
const cutLast = str => str.slice(2)
const cutFirstLast = str => str.slice(2, -2)
//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(cutFirst(`lama`), `la`)
assert.strictEqual(cutLast(`lama`), `ma`)
assert.strictEqual(cutFirstLast(`lamamama`), `mama`)
// End of tests */
