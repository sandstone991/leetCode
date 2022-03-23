/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(x) {
    //So apparently if you take the square root of any value, say x the resulting value sqrt(x) has to be somewhere between [1,x/2+1]
    //Apply binary search and you'll be able to find the number easily
    //Azzam
  let left = 0;
  let right = Math.floor(x / 2) + 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let midSquared = mid * mid
    if (midSquared == x) return true;
    else if (midSquared < x) left = mid + 1;
    // attention
    else if (midSquared > x) right = mid - 1; // 
  }
  return false;
};
