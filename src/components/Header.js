import React from "react";
import { Link } from "react-router-dom";
import "./../styles/header.css";
import NavBar from "./NavBar";

function Header() {
  const logo = require("./StrangerPetsLogo.png");
  return (
    <header>
        <div id="logo">
          <Link exact to='/' id="logo-link">
          <img src={logo} alt="logo" id="logoImg" />
          </Link>
        </div>
      <NavBar />
    </header>
  );
}

export default Header;
