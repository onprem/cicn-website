import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "Components/Nav";
import Container from "Components/Container";
import Footer from "Components/Footer";
import Top from "Pages/Top";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Top />
      <Nav />
      <Container>
        <Switch>
          <Route path="/">Welcome to CICN2020</Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
