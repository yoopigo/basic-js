const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');

  let count1 = new Array(26).fill(0);
  let count2 = new Array(26).fill(0);


  for (let char of arr1) {
    count1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }


  for (let char of arr2) {
    count2[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }


  let count = 0;

  for (let i = 0; i < 26; i++) {
    count += Math.min(count1[i], count2[i]);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
