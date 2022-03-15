/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  let pL = 0,
    pR = 0,
    maxLength = 1;
  //sliding window
  nums.sort((a, b) => a - b);
  let arrCum = accumulate(nums);
  while (pR < arrCum.length) {
    let transformed = nums[pR] * (pR - pL + 1);
    let total = arrCum[pR] - (arrCum[pL - 1] || 0) + k;
    if (transformed <= total) {
      pR++;
      maxLength = Math.max(maxLength, pR - pL);
    } else {
      pL++;
    }
  }
  return maxLength;
};
const accumulate = (arr) =>
  arr.map(
    (
      (sum) => (value) =>
        (sum += value)
    )(0)
  );
//My solution is somewhy slow
//My solution also takes some spcae but at least I know why
