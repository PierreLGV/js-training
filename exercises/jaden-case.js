'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const str = 'How are you ?'

const splitStr = str => str.split(" ")
const capitalize = arrOfStr => arrOfStr.map(str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1))
const concat = str => str.join(" ")
const jadenCase = str => concat(capitalize(splitStr(str)))



        

    // Begin of tests
    const assert = require('assert')
    assert.strictEqual(typeof jadenCase, "function")
    assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')

    // End of tests */
