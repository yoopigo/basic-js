const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  arr = []

  let n1 = String(n);

  for (let i = 0; i < n1.length; i++) {
    let num = +(n1.slice(0, i) + n1.slice(i + 1))
    arr.push(num)

  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
