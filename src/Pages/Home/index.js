import React from "react";

import logo from "Assets/logo.png";

import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="logo" />
      <h2 className="heading">Welcome to CICN 2020</h2>
      <p className="para">
        <b>Papers will be submitted for inclusion in IEEE Xplore</b>
      </p>
      <p className="para">
        The 12th International Conference on Computational Intelligence and Communication Networks
        (CICN 2020) is organized to address various issues to prosper the creation of intelligent
        solutions in future. The aim is to bring together worldwide leading researchers, developers,
        practitioners and educators interested in advancing the state of the art in computational
        intelligence and communication Networks for exchanging knowledge that encompasses a broad
        range of disciplines among various distinct communities. It is expected that researchers
        will bring new prospect for collaboration across disciplines and gain idea facilitating
        novel breakthrough. The theme for this conference is Innovating and Inspiring the
        researchers to adopt the outcome for implementation.
      </p>
      <p className="para">
        The conference will provide an exceptional platform to the researchers to meet and discuss
        the utmost solutions, scientific results and methods in solving intriguing problems with
        people that actively involved in these evergreen fields. The 2-day conference commencing
        from 05 Sep will feature prominent keynote speakers, tutorials and paper presentation in
        parallel sessions. All accepted papers will appear in conference proceedings published by
        the Conference Publishing Services.
      </p>
      <p className="para">
        CICN 2020 will no doubt be proven to be exciting and educative. The General Chair, along
        with the entire team cordially invite you to take part in this upcoming event and together
        we flourish it into a most memorable experience. Organising committee will also plan for
        various tours to various historical Places around Nainital.
      </p>
      <p className="para">
        <b>Prof. GS Tomar</b>
        <br />
        General Chair
      </p>
    </>
  );
};

export default Home;
