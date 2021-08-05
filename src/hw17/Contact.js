import React from "react";

export default function Contact(props) {
  function getGender() {
    if (props.gender === "female") {
      return <img src="" alt="female" />;
    } else if (props.gender === "male") {
      return <img src="" alt="male" />;
    } else {
      return <img src="" alt="?" />;
    }
  }

  return (
    <div>
      <img src="" alt="" />
      <div>
        <div className="fullname">
          <p>{props.firstName}</p>
          <p>{props.lastName}</p>
        </div>
        <p className="number">{props.phone}</p>
        <getGender />
      </div>
    </div>
  );
}
