/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  let lP = 0;
  let rP = 0;
  let ans = 0;
  let hash = {};
  while (rP < s.length) {
    if (s[rP] in hash) {
      while (true) {
        delete hash[s[lP]];
        lP++;
        if (s[lP - 1] === s[rP]) {
          break;
        }
      }
    } else {
      hash[s[rP]] = 1;
      rP++;
      ans = Math.max(rP - lP, ans);
    }
  }
  return (ans = Math.max(rP - lP, ans));
};
//Sliding window + hash
