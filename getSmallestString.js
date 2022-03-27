/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
  let arr = new Array(n).fill("a");
  let ascii_shift = 96;
  k -= n - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (k === 0) break;
    let decremented = k < 26 ? k : 26;
    arr[i] = String.fromCharCode(decremented + ascii_shift);
    k -= decremented-1;
  }
  return arr.join("");
};
