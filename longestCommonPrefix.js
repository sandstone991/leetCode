/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  let minLength = 201;
  for (let str of strs) {
    if (str.length < minLength) {
      minLength = str.length;
    }
  }
  for (let i = 0; i < minLength; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[j - 1][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += strs[0][i];
  }
  return commonPrefix;
};
