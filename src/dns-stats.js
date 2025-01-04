const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};


  for (let i = 0; i < domains.length; i++) {
    let dom = domains[i].split('.').reverse();

    let suffix = '';

    for (let j = 0; j < dom.length; j++) {
      suffix = dom[j] + '.' + suffix;
      suffixReverse = suffix.split('.').reverse().join('.');
      result[suffixReverse] = result[suffixReverse] ? result[suffixReverse] + 1 : 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
