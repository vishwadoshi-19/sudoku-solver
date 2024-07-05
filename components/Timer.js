import styles from "../styles/Game.module.scss";

const Timer = (props) => {
  return <div className={styles.timer}>⏳ : {props.end - props.start}ms</div>;
};

export default Timer;
