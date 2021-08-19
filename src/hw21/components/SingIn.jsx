import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormWrapper, Flex, Button } from "./MyBlocks";
import { Text, Input, Submit, TitleSignForm } from "./SignFormStyled";

export default function SignIn({ Login, error, match }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const signInHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  const [border, setBorder] = useState("red");
  function getValidInput(e) {
    setDetails({ ...details, email: e.target.value });
    if (details.email.match("@") !== null) {
      return setBorder("blue");
    }
  }
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
          borderColor={`${
            details.email == ""
              ? "transparent"
              : `${
                  details.email.match(/....*@...*\....*/g) !== null
                    ? "green"
                    : "red"
                }`
          }`}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          borderColor={`${
            details.password == ""
              ? "transparent"
              : `${
                  details.password.match(/([A-Z][a-z]|[a-z][A-Z])/g) !== null &&
                  details.password.match(/.........*/g) !== null
                    ? "green"
                    : "red"
                }`
          }`}
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
            <Submit width="auto" type="checkbox" />
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
