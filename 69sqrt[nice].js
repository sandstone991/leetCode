/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let ans = 0;
  let odd = 1;
  while (true) {
    let temp = x - odd;
    if (temp < 0) {
      break;
    }
    odd += 2;
    x = temp;
    ans++;
  }
  return ans;
};
//Not a fast solution by any means
//Use binary search or a mathermatical formula like Newton's
