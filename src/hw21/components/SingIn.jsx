import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn({ Login, error, match }) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const signInHandler = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={signInHandler}>
      <div className="signIn">
        <div>Sign in</div>
        {error != "" ? <div className="error">{error}</div> : ""}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          value={details.password}
        />
        <input type="checkbox" />
        <p>Remember me</p>
        <input type="submit" value="Sing in" />
        <Link to={`${match.url}/sign-up`}>
          <button>Don't have an account? Sign Up</button>
        </Link>
      </div>
    </form>
  );
}
