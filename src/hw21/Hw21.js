import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import SignIn from "./components/SingIn";
import SingUp from "./components/SignUp";
import "./hw21.css";
import { Flex, Button } from "./components/MyBlocks";
import { Text, TitleSignForm } from "./components/SignFormStyled";
import Hw20 from "../hw20/Hw20";

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
  const routes = [
    {
      path: `${match.path}/sign-in`,
      name: "Sign In",
      Component: <SignIn Login={Login} error={error} match={match} />,
      bg: "#dccbd3",
    },
    {
      path: `${match.url}/sign-up`,
      name: "Sing Up",
      Component: (
        <SingUp
          Registration={Registration}
          Login={Login}
          users={users}
          match={match}
        />
      ),
      bg: "#99cdd1",
    },
  ];
  return (
    <Flex direction="column" width="50vw" margin="20px">
      {user.email != "" ? (
        <Flex
          direction="column"
          justify="center"
          align="center"
          margin="50px 0"
        >
          <Flex>
            <TitleSignForm fontSize="40px">Welcome, {user.name}!</TitleSignForm>
            <Link to={`${match.url}`}>
              <Button
                bg="transparent"
                fontSize="14px"
                margin="0 0 10px 50%"
                padding="10px 20px"
                onClick={Logout}
              >
                Logout
              </Button>
            </Link>
          </Flex>
          <Hw20 />
        </Flex>
      ) : (
        <div>
          <Flex margin="100px 10%" direction="column">
            <div
              className={
                match.url === "/hw21" && match.isExact === true
                  ? "nav-bar-display"
                  : "nav-bar"
              }
            >
              {routes.map((route) => (
                <Link key={route.path} as={Link} to={route.path} exact>
                  <Button bg={route.bg} margin="20px" padding="10px 70px">
                    {route.name}
                  </Button>
                </Link>
              ))}
              {/* <Link to={`${match.url}/sign-in`}>
                <Button bg="#dccbd3" margin="20px" padding="10px 70px">
                  Sign In
                </Button>
              </Link>

              <Link to={`${match.url}/sign-up`}>
                <Button bg="#99cdd1" margin="20px" padding="10px 70px">
                  Sign Up
                </Button>
              </Link> */}
            </div>
          </Flex>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {Component}
              </Route>
            ))}
            {/* <Route path={`${match.path}/sign-in`}>
              <SignIn Login={Login} error={error} match={match} />
            </Route>
            <Route path={`${match.path}/sign-up`}>
              <SingUp
                Registration={Registration}
                Login={Login}
                users={users}
                match={match}
              />
            </Route> */}
          </Switch>
        </div>
      )}
    </Flex>
  );
}
