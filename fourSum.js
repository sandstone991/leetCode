/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  //We want to find the quadruplets [a,b,c,d]
  //We don't want duplicate so we have to make sure every time that the combination is unique
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let j = 0; j < nums.length; j++) {
    if (j > 0 && nums[j] === nums[j - 1]) continue;
    //Make sure A is unique
    for (let i = j + 1; i < nums.length; i++) {
      if (i > j + 1 && nums[i] === nums[i - 1]) continue;
      //Make sure B is unique
      let l = i + 1,
        r = nums.length - 1;
      while (l < r) {
        let sum = nums[j] + nums[l] + nums[r] + nums[i];
        if (sum === target) {
          ans.push([nums[j], nums[l], nums[r], nums[i]]);
          l++;
          //Make sure C is unique
          //Thus the triplet A+B+C+D will always be unique
          while (nums[l] == nums[l - 1] && l < r) l++;
        } else if (sum < target) l++;
        else r--;
      }
    }
  }
  return ans;
};
