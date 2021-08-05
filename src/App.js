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
      <Link to="/">Home</Link>
      <Link to="/hw16">Intro to React</Link>
      <Link to="/hw17">React Hooks</Link>
      </nav>
      <Switch>
        <Route exact path="/hw16">
          <Hw16 />
        </Route>
        <Route path="/hw17">
          <Hw17 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
