import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input require type="text" placeholder="username" />
        <input require type="password" placeholder="password" />
        <input require type="email" placeholder="email" />
        <button>Register</button>
        <p>This is an error</p>
        <span>
          Do you have an account? <Link to="/Login">Login </Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
