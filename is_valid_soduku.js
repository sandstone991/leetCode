var isValidSudoku = function (board) {
  let rows = populateArrayWithObject();
  let colm = populateArrayWithObject();
  let blocks = populateArrayWithObject();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let curElem = board[i][j];
      if (curElem == ".") {
        continue;
      }
      if (rows[i][curElem]) {
        return false;
      } else {
        rows[i][curElem] = true;
      }
      if (colm[j][curElem]) {
        return false;
      } else {
        colm[j][curElem] = true;
      }
      let blockNumber = determineBlockNumber(i, j);
      if (blocks[blockNumber][curElem]) {
        return false;
      } else {
        blocks[blockNumber][curElem] = true;
      }
    }
  }
  return true;
};
function determineBlockNumber(row, col) {
  return Math.floor(row / 3) * 3 + Math.floor(col / 3);
}
function populateArrayWithObject() {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr[i] = {};
  }
  return arr;
}
