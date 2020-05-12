import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./nav.module.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={styles.hamdiv}>
        <button
          type="button"
          className={`${styles.btn} ${isOpen && styles.open}`}
          onClick={() => setIsOpen((o) => !o)}
        />
      </div>
      <nav
        className={`${styles.nav} ${isOpen && styles.navopen}`}
        onClick={() => setIsOpen((o) => !o)}
      >
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/papers">
          Call for Papers
        </Link>
        <Link className={styles.link} to="/schedule">
          Important Dates/Schedules
        </Link>
        <Link className={styles.link} to="/paper-submission">
          Paper Submission
        </Link>
        <Link className={styles.link} to="/registration">
          Registration
        </Link>
        <Link className={styles.link} to="/accepted-papers">
          Accepted Papers
        </Link>
        <Link className={styles.link} to="/committees">
          Committees
        </Link>
        <Link className={styles.link} to="/keynote">
          Keynote Speakers
        </Link>
        <Link className={styles.link} to="/sponsors">
          Sponsors
        </Link>
        <Link className={styles.link} to="/accommodation">
          Accommodation
        </Link>
        <Link className={styles.link} to="/past-conferences">
          Past Conferences
        </Link>
        <Link className={styles.link} to="/activities">
          City Tours & Activities
        </Link>
        <Link className={styles.link} to="/contact">
          Contact Us
        </Link>
      </nav>
    </>
  );
};

export default Nav;
