const isValid = (board, row, col, c) => {
  for (let i = 0; i < 9; i++) {
    if (c !== "") {
      if (board[i][col] === c) return false; //check row
      if (board[row][i] === c) return false; //check column
      let newRow = 3 * ((row / 3) | 0) + ((i / 3) | 0);
      let newCol = 3 * ((col / 3) | 0) + (i % 3);
      if (board[newRow][newCol] === c) return false; //check 3*3 block
    }
  }
  return true;
}

export default isValid;
