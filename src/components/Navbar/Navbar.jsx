import React from "react";

import nav_logo from "../../images/nav-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={nav_logo} alt="navbarlogo" />
      </div>
      <div className="navbar-buttons">
        <button className="navbar-login">login</button>
        <button className="navbar-signup">sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
