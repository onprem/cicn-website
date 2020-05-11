import React from "react";
import logo from "Assets/logo.png";
import styles from "./top.module.css";

const Top = () => {
  return (
    <header className={styles.top}>
      <div className={styles.main}>
        <img src={logo} alt="conference logo" className={styles.logo} />
        <div className={styles.text}>
          <h1 className={styles.heading}>CICN 2020</h1>
          <h2 className={styles.sub}>XIIth International Conference on</h2>
          <h2 className={styles.sub}>Computational Intelligence & Communication Networks</h2>
          <h2 className={styles.sub}>(BIAS Bhimtal, Nanital)</h2>
        </div>
      </div>
    </header>
  );
};

export default Top;
