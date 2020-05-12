import React from "react";
import teqip from "Assets/teqip.png";
import iete from "Assets/iete.png";

import styles from "./sponsors.module.css";

const Sponsors = () => {
  return (
    <>
      <h2 className="heading">Sponsors</h2>
      <p className={`para ${styles.flex}`}>
        <b>TEQIP Phase III, UTU Dehradun</b>
        <img src={teqip} alt="TEQIP" />
      </p>
      <p className={`para ${styles.flex}`}>
        <b>IETE Gwalior, India & IEEE MP Sub Section</b>
        <img src={iete} alt="IETE" />
      </p>
    </>
  );
};

export default Sponsors;
