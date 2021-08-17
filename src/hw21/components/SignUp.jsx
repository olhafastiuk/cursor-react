import React  from "react";
import { Link } from "react-router-dom";

export default function SingUp({match}) {
    return (
      <div>
        <div>Sign up</div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="checkbox" />
        <p>
          I want to receive inspiration, marketing, promotions and updates via
          email
        </p>
        <input type="submit" value="Sing up" />
      <Link to={`${match.url}/sign-in`}>
        <button>Already have an account? Sign In</button></Link>
      </div>
    );
  }