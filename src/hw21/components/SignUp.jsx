import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormWrapper, Flex, Button } from "./MyBlocks";
import { Text, Input, Submit, TitleSignForm } from "./SignFormStyled";
import SetBorder from "./SetBorder";

export default function SingUp({ Registration, Login, users, match }) {
  const [newDetails, setNewDetails] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  let valid = true;
  const [error, setError] = useState("");

  function validator(term, input) {
    let border = SetBorder(term, input);
    border === "green" ? (valid = true) : (valid = false);
    return border;
  }

  const signUpHandler = (e) => {
    if (valid) {
      e.preventDefault();
      Registration(newDetails);
      console.log(newDetails);
    } else setError("Check data");
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
            borderColor={validator("name", newDetails.name)}
            value={newDetails.name}
          />
          <Input
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setNewDetails({ ...newDetails, lastName: e.target.value })
            }
            borderColor={validator("lastName", newDetails.lastName)}
            value={newDetails.lastName}
          />
        </Flex>
        <Input
          type="email"
          placeholder="Email Address"
          onChange={(e) =>
            setNewDetails({ ...newDetails, email: e.target.value })
          }
          borderColor={validator("email", newDetails.email)}
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
          borderColor={validator("password", newDetails.password)}
          value={newDetails.password}
        />
        <Text fontSize="20px" color="rgb(173, 75, 50)">
          {error}
        </Text>
        <Submit
          id="signUp"
          color="gray"
          width="60%"
          type="submit"
          value="Sing up"
        />
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
