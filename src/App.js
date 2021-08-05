import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Router, Route, Switch } from "react-router";
import Hw16 from "./hw16/Hw16";
import Hw17 from "./hw17/Hw17";

function App() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/hw16">Intro to React</a>
        <a href="/hw17">React Hooks</a>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/hw16" component={Hw16} />
          <Route exact path="/hw17" component={Hw17} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
