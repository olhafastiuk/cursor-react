import "./hw20.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Twitter from "../hw16/Hw16";
import Contacts from "../hw17/Hw17";

export default function Hw20() {
  const match = useRouteMatch();
  console.log(match)
  return (
    <div id="hw20" className={match.url === "/hw20" && match.isExact=== true ? 'hw20-main':'hw20'}>
      <div className="nav-menu">
        <NavLink to={`${match.url}/home`}>Home</NavLink>
        <NavLink to={`${match.url}/twitter`}> Twitter</NavLink>
        <NavLink to={`${match.url}/gallery`}> Gallery</NavLink>
        <NavLink to={`${match.url}/contacts`}> Contacts</NavLink>
      </div>
      <Switch>
        <Route path={`${match.path}/home`}>
          <Home />
        </Route>
        <Route path={`${match.path}/twitter`}>
          <Twitter />
        </Route>
        <Route path={`${match.path}/gallery`}>
          <Gallery />
        </Route>
        <Route path={`${match.path}/contacts`}>
          <Contacts />
        </Route>
      </Switch>
    </div>
  )
}
