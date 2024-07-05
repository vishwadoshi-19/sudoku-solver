import styles from "../styles/Game.module.scss";
const Board = (props) => {
  const colorScheme = props.solved ? "rgb" : undefined;
  return <div className={styles["board"] + " " + styles[colorScheme]} {...props} />;
};

export default Board;
