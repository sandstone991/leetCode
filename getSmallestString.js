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
//Something I figured out after I solved this problem is my solution is dumb and there could be a better solution mathematically
//No matter how long the string is or how big or small your k is your string will always be in a this form
// [one or more a] + [0 or 1 character that is not a or z] + [0 or more z]
//knowing this you can see how many (a)s will fit at the beginning how many z can fit at the end (if any) and the remainder will be the middle character (if any)

