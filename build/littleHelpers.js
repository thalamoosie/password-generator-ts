"use strict";
/**
 *
 * @param start Start of range number, inclusive
 * @param end End of range number, inclusive
 * @returns array of numbers based on given range
 */
const createRange = function (start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};
/**
 *
 * @param arr Array for obtaining a random index
 * @returns Random index of given array
 */
const randomArrIndex = function (arr) {
    return Math.floor(Math.random() * arr.length);
};
/**
 *
 * @param min Minimum number in randomization range
 * @param max Maximum in randomization range
 * @returns A random integer between the min and max inclusive
 */
const randomNumber = function (min = 1, max) {
    return Math.floor(Math.random() * (max - min) + min);
};
function createUniqueValues(len, min, max) {
    const set = new Set();
    while (set.size < len) {
        set.add(randomNumber(min, max));
    }
    return set;
}
module.exports = {
    createRange,
    randomArrIndex,
    randomNumber,
    createUniqueValues,
};
