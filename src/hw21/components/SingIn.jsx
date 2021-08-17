import React  from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
      <div>
        <div>Sign in</div>
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="checkbox" />
        <p>Remember me</p>
        <input type="submit" value="Sing in" />
        <Link to={`${match.url}/sign-up`}><button>Don't have an account? Sign Up</button></Link>
      </div>
    );
  }