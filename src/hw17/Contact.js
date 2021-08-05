import React from "react";

export default function Contact(props) {
  function getImg() {
    if (props.gender === "female") {
      return (
        <img
          className="avatar"
          src="https://image.flaticon.com/icons/png/512/2922/2922554.png"
          alt="female"
        />
      );
    } else if (props.gender === "male") {
      return (
        <img
          className="avatar"
          src="https://image.flaticon.com/icons/png/512/265/265674.png"
          alt="male"
        />
      );
    } else {
      return (
        <img
          className="avatar"
          src="https://image.flaticon.com/icons/png/512/1077/1077012.png"
          alt="?"
        />
      );
    }
  }

  return (
    <div className="contact">
      {getImg()}
      <div>
        <div className="fullname">
          <p>{props.firstName}</p>
          <p>{props.lastName}</p>
        </div>
        <a className="number" href="tel:{props.phone}">
          {props.phone}
        </a>
        {/* <getGender /> */}
      </div>
    </div>
  );
}
