import React from "react";

import teqip from "Assets/teqip.png";
import iete from "Assets/iete.png";
import ieee from "Assets/ieee.png";
import bias from "Assets/bias.jpg";
import cps from 'Assets/cps.png';

import styles from "./container.module.css";
import { Link } from "react-router-dom";

const Container = ({ children }) => {
  return (
    <div className={styles.container}>
      <section className={styles.side}>
        <p className={styles.conf}>Conference Sponsored Jointly by</p>
        <img src={teqip} alt="TEQIP" className={styles.imgw} />
        <img src={iete} alt="IETE" className={styles.img} />
        <img src={ieee} alt="IEEE" className={styles.img} />
        <img src={bias} alt="BIAS" className={styles.img} />
        <p className={styles.para}>Conference PROCEEDINGS PUBLISHED by</p>
        <img src={cps} alt="CPS" className={styles.cps} />
      </section>
      <section className={styles.main}>{children}</section>
      <section className={styles.side}>
        <p className={styles.reg}>2020 Registration</p>
        <Link to="/registration" className={styles.regBtn}>
          REGISTER NOW
        </Link>
        <p className={styles.para}>
          Author Registration <br /> Deadline: April 30th
        </p>
        <p className={styles.para}>
          Complimentary Registration <br /> During May
        </p>
        <Link to="/registration" className={styles.regLink}>
          Registration Details
        </Link>
      </section>
    </div>
  );
};

export default Container;
