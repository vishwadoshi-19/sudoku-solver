import Head from "next/head";
import Game from "../components/Game";
import Footer from "../components/Footer";
import styles from "../styles/Game.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sudoku Solver</title>
        <meta name="description" content="Sudoku Solver" />
      </Head>
      <Game />
      <Footer />
    </div>
  );
}
