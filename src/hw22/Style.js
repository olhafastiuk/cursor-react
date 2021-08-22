import React from "react";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 20px 50px;
`;

export const H1 = styled.h1`
  color: rgb(76, 114, 218);
  font-size: 30px;
`;
const StyledInput = styled.input`
  padding: ${(props) => props.padding || "10px 15px"};
  margin: ${(props) => props.margin || "10px"};
  width: ${(props) => props.width || "100%"};
  border: none;
  outline: none;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
  font-size: 1em;
  &:focus {
    border-bottom: ${(props) => props.border || "1px solid gray"};
    color: darkblue;
  }
`;
export const Input = (props) => {
  return <StyledInput {...props} />;
};

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-items: ${(props) => props.align || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  transition: ${(props) => props.height || "100%"};
`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export const Select = styled.select`
  border-radius: 10px;
  border: none;
  outline: none;
`;
export const Submit = styled(StyledInput)`
color: white;
background: rgba(76, 114, 218, 0.8);
box-shadow: rgba(0, 0, 0, 0.28) 0px 2px 4px;
width: 30%;
font-size: 15px;
cursor:pointer;
&:active {
box-shadow: none;

}
&:focus {
    border-bottom: none;
    color: white;
`;
