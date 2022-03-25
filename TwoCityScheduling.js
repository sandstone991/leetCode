/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => {
    let dif1 = a[0] - a[1];
    let dif2 = b[0] - b[1];
    return dif1 - dif2;
  });
  let ans = 0;
  for (let i = 0; i < costs.length / 2; i++) {
    ans += costs[i][0];
  }
  for (let i = costs.length / 2; i < costs.length; i++) {
    ans += costs[i][1];
  }
  return ans;
};

//Greedy-medium
//Idea is to sort the array depending on the difference between them
//The greater the difference the more prior the element in the array
//then take the first element in the [0,n/2) arrays and the last element in the [n/2,n) arrays
