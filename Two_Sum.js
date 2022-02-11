let twoSum = function (nums, target) {
  let h1 = {};
  for (let i = 0; i < nums.length; i++) {
    h1[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (complement in h1) {
      if (i === +h1[complement]) {
        continue;
      }
      return [i, +h1[complement]];
    }
  }
};
