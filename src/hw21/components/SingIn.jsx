import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormWrapper, Flex, Button } from "./MyBlocks";
import { Text, Input, Submit, TitleSignForm } from "./SignFormStyled";
import SetBorder from "./SetBorder";

export default function SignIn({ Login, error, match }) {
  const [details, setDetails] = useState({
    email: localStorage.getItem("rememberMe")
      ? localStorage.getItem("email")
      : "",
    password: localStorage.getItem("rememberMe")
      ? localStorage.getItem("password")
      : "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const signInHandler = (e) => {
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("email", rememberMe ? details.email : "");
    localStorage.setItem("password", rememberMe ? details.password : "");
    e.preventDefault();
    Login(details);
  };
  return (
    <FormWrapper width="50%" margin="-150px 10%" onSubmit={signInHandler}>
      <TitleSignForm>Welcome Back</TitleSignForm>
      {error !== "" ? (
        <Text fontSize="20px" color="rgb(173, 75, 50)">
          {error}
        </Text>
      ) : (
        ""
      )}
      <Flex justify="center" align="start" direction="column">
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          borderColor={SetBorder("email", details.email)}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          borderColor={SetBorder("password", details.password)}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <Submit color="gray" width="60%" type="submit" value="Sing in" />
        <Flex height="auto" align="center" justify="start" margin="0 20px">
          <Flex
            width="50%"
            height="auto"
            align="center"
            justify="start"
            margin="0"
          >
            <Submit
              width="auto"
              type="checkbox"
              onChange={() => setRememberMe(true)}
            />
            <Text color="rgb(76, 114, 218)">Remember me</Text>
          </Flex>
          <Link to={`${match.url}/sign-up`}>
            <Button padding="5px 12px" fontSize="11px" bg="transparent">
              <p>Don't have an account?</p>
              <p> Sign Up</p>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </FormWrapper>
  );
}
