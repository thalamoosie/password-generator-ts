/**
 *
 * @param start Start of range number, inclusive
 * @param end End of range number, inclusive
 * @returns array of numbers based on given range
 */
const createRange = function (start: number, end: number): number[] {
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

const randomArrIndex = function (arr: number[]) {
  return Math.floor(Math.random() * arr.length);
};

/**
 *
 * @param min Minimum number in randomization range
 * @param max Maximum in randomization range
 * @returns A random integer between the min and max inclusive
 */

const randomNumber = function (min: number = 1, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
};

function createUniqueValues(len: number, min: number, max: number) {
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
