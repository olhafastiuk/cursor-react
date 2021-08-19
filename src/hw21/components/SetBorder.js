import React from "react";
export default function SetBorder(term, input) {
  let filter;
  const checkTerm = input;
  if (term === "name") {
    filter = checkTerm.match(/....*/g);
  } else if (term === "lastName") {
    filter = checkTerm.match(/....*/g);
  }
  if (term === "email") {
    filter = checkTerm.match(/....*@...*\....*/g);
  }
  if (term === "password") {
    filter = checkTerm.match (/([A-Z][a-z]|[a-z][A-Z])/g) && checkTerm.match(/.........*/);
  }
  let color = `${
    checkTerm == "" ? "transparent" : `${filter !== null ? "green" : "red"}`
  }`;
  return color;
}
