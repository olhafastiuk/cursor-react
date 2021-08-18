import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h1`
  font-size: ${(props) => props.fontSize || "30px"};
  font-weight: ${(props) => props.fontWeight || "200"};
  color: ${(props) => props.color || "white"};
`;

export const TitleSignForm = (props) => {
  return <TitleStyled {...props} />;
};

const InputStyled = styled.input`
  font-family: Roboto, sans-serif;
  width: ${(props) => props.width || "100%"};
  padding: ${(props) => props.padding || "10px 15px"};
  margin: ${(props) => props.margin || "10px"};
  background: rgba(255, 255, 255, 0.466);
  border: ${(props) => props.bprder || "1px solid transparent"};
  border-radius: 6px;
  outline: none;
  color: ${(props) => props.color || "rgb(76, 114, 218)"};
  &: placeholder {
    color: darkgray;
  }
  &:focus {
    background: white;
    color: rgb(76, 114, 218);
  }
  &:active {
    background: white;
    color: rgb(76, 114, 218);
  }
`;
export const Input = (props) => {
  return <InputStyled {...props} />;
};

const SubmitStyled = styled(InputStyled)`
  &: hover {
    background: white;
    cursor: pointer;
    color: rgb(76, 114, 218);
  }
`;

export const Submit = (props) => {
  return <SubmitStyled {...props} />;
};

const TextStyled = styled.p`
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color || "black"};
`;

export const Text = (props) => {
  return <TextStyled {...props} />;
};
