import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo-png.png";
import categories from "../categories";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="links">
          {categories.map((category, index) => {
            return (
              <Link className="link" to={`?cat=${category}`} key={index}>
                <h6>{category}</h6>
              </Link>
            );
          })}
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link to="/write" className="link">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
