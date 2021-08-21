import "./App.css";
import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
// import { Router, Route, Switch } from "react-router";
import Hw16 from "./hw16/Hw16";
import Hw17 from "./hw17/Hw17";
import Hw20 from "./hw20/Hw20";
import Hw21 from "./hw21/Hw21";
import Hw22 from "./hw22/Hw22";

function App() {
  const usersStorage = [
    {
      name: "Admin",
      email: "admin@admin.com",
      password: "Admin1234",
    },
  ];

  const [users, setUsers] = useState(usersStorage);
  const [user, setUser] = useState({ name: "", email: "" });

  return (
    <>
      <nav>
        <Link className="mainLink" to="/">
          Home
        </Link>
        <Link className="mainLink" to="/hw16">
          Intro to React
        </Link>
        <Link className="mainLink" to="/hw17">
          React Hooks
        </Link>
        <Link className="mainLink" to="/hw20">
          React Router
        </Link>
        <Link className="mainLink" to="/hw21">
          Styled Components
        </Link>
        <Link className="mainLink" to="/hw22">
          Redux
        </Link>
      </nav>
      <Switch>
        <Route exact path="/hw16">
          <Hw16 />
        </Route>
        <Route path="/hw17">
          <Hw17 />
        </Route>
        <Route path="/hw20">
          <Hw20 />
        </Route>
        <Route path="/hw21">
          <Hw21
            users={users}
            setUsers={setUsers}
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route path="/hw22">
          <Hw22 />
          </Route>
      </Switch>
    </>
  );
}

export default App;
