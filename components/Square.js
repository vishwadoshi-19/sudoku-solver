import sanitizeInput from "../lib/sanitizeInput";
import styles from "../styles/Game.module.scss";
import isValid from "../lib/isValid";
import { useState } from "react";
import toast from 'react-hot-toast';

const Square = (props) => {
  const [invalid, setInvalid] = useState(false);

  const showInvalidInputToast = () => toast.error('Invalid input', { position: 'top-right' });

  const handleInputValue = (flag, val) => {
    let newSquares = props.squares;
    let newUserInput = props.userInput;
    setInvalid(flag);
    props.setInvalid(flag);
    newSquares[props.rowIdx][props.colIdx] = val;
    newUserInput[props.rowIdx][props.colIdx] = val;
    props.setSquares([...newSquares]);
    props.setUserInput([...newUserInput]);
  }

  const handleChange = (e) => {
    e.preventDefault();
    let newSquares = props.squares;
    let row = props.rowIdx;
    let col = props.colIdx;
    if (!e.target.value?.length) {
      handleInputValue(false, "");
      return;
    }
    const val = sanitizeInput(e);
    if (val === -1 || !isValid(newSquares, row, col, val)) {
      showInvalidInputToast();
      handleInputValue(true, e.target.value);
    } else {
      handleInputValue(false, val);
    }
  };

  return (
    <>
      {!props.solved ? (
        <input
          className={styles["square"] + " " + styles[invalid ? "invalid" : undefined]}
          type="text"
          value={props.squares[props.rowIdx][props.colIdx]}
          id="square-val"
          name="square-val"
          maxLength="1"
          inputMode="numeric"
          onChange={(e) => handleChange(e)}
        ></input>
      ) : (
        <div className={styles["square"] + " " + styles[props.userInput[props.rowIdx][props.colIdx] ? "highlight" : null]}>{props.val}</div>
      )}
    </>
  );
};

export default Square;
