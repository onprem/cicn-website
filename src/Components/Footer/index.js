import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.para}>
        Designed and Developed by&nbsp;
        <a
          className={styles.link}
          target="_blank"
          rel="noreferrer noopener"
          href="https://lostfoil.com"
        >
          LostFoil
        </a>
      </p>
    </footer>
  );
};

export default Footer;
