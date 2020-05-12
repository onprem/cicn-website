import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "Components/Nav";
import Container from "Components/Container";
import Footer from "Components/Footer";
import Top from "Pages/Top";

import Home from "Pages/Home";
import Papers from "Pages/Papers";
import Schedule from "Pages/Schedule";
import PaperSubmission from "Pages/PaperSubmission";
import Registration from "Pages/Registration";
import AcceptedPapers from "Pages/AcceptedPapers";
import Committees from "Pages/Committees";
import KeynoteSpeakers from "Pages/KeynoteSpeakers";
import Sponsors from "Pages/Sponsors";
import Accommodation from "Pages/Accommodation";
import PastConferences from "Pages/PastConferences";
import Activities from "Pages/Activities";
import Contact from "Pages/Contact";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Top />
      <Nav />
      <Container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/papers">
            <Papers />
          </Route>
          <Route exact path="/schedule">
            <Schedule />
          </Route>
          <Route exact path="/paper-submission">
            <PaperSubmission />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/accepted-papers">
            <AcceptedPapers />
          </Route>
          <Route exact path="/committees">
            <Committees />
          </Route>
          <Route exact path="/keynote">
            <KeynoteSpeakers />
          </Route>
          <Route exact path="/sponsors">
            <Sponsors />
          </Route>
          <Route exact path="/accommodation">
            <Accommodation />
          </Route>
          <Route exact path="/past-conferences">
            <PastConferences />
          </Route>
          <Route exact path="/activities">
            <Activities />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
