/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]][1]++;
    } else {
      obj[s[i]] = [i, 0];
    }
  }
  for (let letter in obj) {
    if (obj[letter][1] == 0) {
      return obj[letter][0];
    }
  }
  return -1;
};
