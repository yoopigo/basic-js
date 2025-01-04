const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let code = '';
  count = 1;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      count = count + 1;
    } else {
      code += count + str[i];
      count = 1;
    }
  }

  return code.split('').filter(x => x !== '1').join('');
}

module.exports = {
  encodeLine
};
