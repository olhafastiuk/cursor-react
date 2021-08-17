import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import SignIn from "./components/SingIn";
import SingUp from "./components/SignUp";
import "./hw21.css";

export default function Hw21({ user, setUser, users, setUsers }) {
  const match = useRouteMatch();
  const [error, setError] = useState("");

  const Registration = (newDetails) => {
    setUsers([...new Set(users.concat(newDetails))]);
    setUser({
      name: newDetails.name,
      email: newDetails.email,
    });
    console.log("Logged in");
  };
  const Login = (details) => {
    users.map((el) => {
      if (details.email === el.email && details.password === el.password) {
        setUser({
          name: el.name,
          email: details.email,
        });
        console.log("Logged in");
        return;
      } else setError("Details do not match!");
    });
  };

  const Logout = () => {
    setUser({
      name: "",
      email: "",
    });
    console.log("logout");
  };
  return (
    <div>
      {user.email != "" ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <div>
          <div
            className={
              match.url === "/hw21" && match.isExact === true
                ? "nav-bar-display"
                : "nav-bar"
            }
          >
            <Link to={`${match.url}/sign-in`}>
              <button>Sign In</button>
            </Link>

            <Link to={`${match.url}/sign-up`}>
              <button>Sign Up</button>
            </Link>
          </div>

          <Switch>
            <Route path={`${match.path}/sign-in`}>
              <SignIn Login={Login} error={error} match={match} />
            </Route>
            <Route path={`${match.path}/sign-up`}>
              <SingUp
                Registration={Registration}
                Login={Login}
                users={users}
                match={match}
              />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}
