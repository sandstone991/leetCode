/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let m = board[0].length;
  let n = board.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
    for (let j = 0; j < m; j++) {
      let sum = 0;
      if (board[i - 1]) {
        sum += board[i - 1][j - 1] || 0;
        sum += board[i - 1][j] || 0;
        sum += board[i - 1][j + 1] || 0;
      }
      sum += board[i][j - 1] || 0;
      sum += board[i][j + 1] || 0;
      if (board[i + 1]) {
        sum += board[i + 1][j - 1] || 0;
        sum += board[i + 1][j] || 0;
        sum += board[i + 1][j + 1] || 0;
      }
      arr[i].push(sum);
    }
  }
  console.log(arr);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        if (arr[i][j] === 2 || arr[i][j] === 3) continue;
        else board[i][j] = 0;
      } else {
        if (arr[i][j] === 3) board[i][j] = 1;
      }
    }
  }
  return board;
};
