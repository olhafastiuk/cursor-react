import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormWrapper, Flex, Button } from "./MyBlocks";
import { Text, Input, Submit, TitleSignForm } from "./SignFormStyled";

export default function SingUp({ Registration, Login, users, match }) {
  const [newDetails, setNewDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    Registration(newDetails);
    console.log(newDetails);
  };
  return (
    <FormWrapper width="50%" margin="-150px 10%" onSubmit={signUpHandler}>
      <TitleSignForm>Create Account</TitleSignForm>
      <Flex justify="center" align="start" direction="column">
        <Flex>
          <Input
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setNewDetails({ ...newDetails, name: e.target.value })
            }
            value={newDetails.name}
          />
          <Input type="text" placeholder="Last Name" />
        </Flex>
        <Input
          type="email"
          placeholder="Email Address"
          onChange={(e) =>
            setNewDetails({ ...newDetails, email: e.target.value })
          }
          value={newDetails.email}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setNewDetails({ ...newDetails, password: e.target.value })
          }
          value={newDetails.password}
        />
        <Submit color="gray" width="60%" type="submit" value="Sing up" />
        <Flex height="auto" align="center" justify="start" margin="0 20px">
          <Flex
            width="50%"
            height="auto"
            align="center"
            justify="start"
            margin="0 20px 0 0"
          >
            <Submit width="auto" type="checkbox" />
            <Text color="rgb(76, 114, 218)">
              I want to receive inspiration, marketing, promotions and updates
              via email
            </Text>
          </Flex>
          <Link to={`${match.url}/sign-in`}>
            <Button padding="5px 12px" fontSize="11px" bg="transparent">
              <p>Already have an account?</p>
              <p> Sign In</p>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </FormWrapper>
  );
}
