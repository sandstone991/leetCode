/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
 let searchIndex = nums.length-k;
 let d = quickSelect(nums,0,nums.length-1,searchIndex);
 return d
};
function quickSelect(a, low, high, rank) {
  return(function select(low, high) {
    if (low === high) return a[low];
    let pivotIndex = partition(a, low, high);
    if (pivotIndex === rank) return a[pivotIndex];
    if (pivotIndex < rank) return select(pivotIndex + 1, high);
    return select(low, pivotIndex - 1);
  })(low, high);
  function less(x, y) {
    return x - y < 0 ? true : false;
};
  function partition(a, low, high) {
    let leftIndex = low,
      rightIndex = high + 1;
    let partitioningItem = a[low];
    while (true) {
      while (less(a[++leftIndex], partitioningItem) && leftIndex != high) {}
      while (less(partitioningItem, a[--rightIndex]) && rightIndex != low) {}
      if (leftIndex >= rightIndex) break;
      exch(a, leftIndex, rightIndex);
    }
    exch(a, low, rightIndex);
    return rightIndex;
  }
  function exch(a, i, j) {
    [a[i], a[j]] = [a[j], a[i]];
  }
}
