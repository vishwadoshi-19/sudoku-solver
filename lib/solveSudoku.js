import isValid from "./isValid";

function solveSudoku(squares) {
  solve(squares);
  return squares;
}

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === "") {
        for (let c = 1; c <= 9; c++) {
          //trial. Try 1 through 9
          if (isValid(board, i, j, c)) {
            board[i][j] = c; //Put c for this cell

            if (solve(board)) return true;
            //If it's the solution return true
            else board[i][j] = ""; //Otherwise go back
          }
        }
        return false;
      }
    }
  }
  return true;
}
export default solveSudoku;
