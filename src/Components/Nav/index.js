import React from "react";
import { Link } from "react-router-dom";

import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} to="/home">
        Home
      </Link>
      <Link className={styles.link} to="/papers">
        Papers
      </Link>
      <Link className={styles.link} to="/schedule">
        Important Dates/Schedules
      </Link>
      <Link className={styles.link} to="/sponsers">
        Sponsers
      </Link>
      <Link className={styles.link} to="/keynote">
        Keynote Speakers
      </Link>
      <Link className={styles.link} to="/accomodation">
        Accomodation
      </Link>
      <Link className={styles.link} to="/committees">
        Committees
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
  );
};

export default Nav;
