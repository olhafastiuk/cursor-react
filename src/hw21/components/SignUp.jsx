import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SingUp({ Registration, Login, users, match }) {
  const [newDetails, setNewDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const signUpHandler = (e) => {
    e.preventDefault();
    Registration(newDetails);
  };
  useEffect(() => {
    Login(newDetails);
  }, [users]);
  return (
    <form onSubmit={signUpHandler}>
      <div className="signUp">
        <div>Sign up</div>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) =>
            setNewDetails({ ...newDetails, name: e.target.value })
          }
          value={newDetails.name}
        />
        <input type="text" placeholder="Last Name" />
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) =>
            setNewDetails({ ...newDetails, email: e.target.value })
          }
          value={newDetails.email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setNewDetails({ ...newDetails, password: e.target.value })
          }
          value={newDetails.password}
        />
        <input type="checkbox" />
        <p>
          I want to receive inspiration, marketing, promotions and updates via
          email
        </p>
        <input type="submit" value="Sing up" />
        <Link to={`${match.url}/sign-in`}>
          <button>Already have an account? Sign In</button>
        </Link>
      </div>
    </form>
  );
}
