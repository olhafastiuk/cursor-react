import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import SignIn from "./components/SingIn";
import SingUp from "./components/SignUp";
import "./hw21.css";

export default function Hw21() {
  const match = useRouteMatch();
  return (
    <div>
    <div className = {match.url === "/hw21" && match.isExact === true ? "nav-bar-display" : "nav-bar"} >
      <Link to={`${match.url}/sign-in`}>
        <button>Sign In</button>
      </Link>
      
      <Link to={`${match.url}/sign-up`}>
        <button>Sign Up</button>
      </Link> 
      </div>
      
      <Switch>
        <Route path={`${match.path}/sign-in`}>
          <SignIn />
        </Route>
        <Route path={`${match.path}/sign-up`}>
          <SingUp />
        </Route>
      </Switch>
      
    </div>
  );
}
