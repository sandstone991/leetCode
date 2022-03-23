/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    //Problem is basically a left bound problem
    //[Left,right)
    //n is our right bound
    let left = 0;
    let right = n + 1;
    while (left < right) {
        
      let mid = Math.floor((left + right) / 2);
        //if its a bad version then all right of it is also a bad version
        //so in search of the first bad version we cut the whole bad half
        //and begin the process of searching in the left
        
      if (isBadVersion(mid)) {
        right = mid;
      } else {
          //if that half is good then the bad version must be in the other half
        left = mid + 1;
      }
    }
    return left;
  };
};
