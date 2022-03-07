/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let arr = [[1]];
  for (let i = 1; i < numRows; i++) {
    let newRow = [1];
    for (let j = 0; j < arr[i - 1].length; j++) {
      newRow.push(arr[i - 1][j] + (arr[i - 1][j + 1] || 0));
    }
    arr.push(newRow);
  }
  return arr;
};
