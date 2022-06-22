import React from "react";
import './../styles/header.css'
import NavBar from "./NavBar";


function Header() {
  const logo = require('./StrangerPetsLogo.png');
  return (
    <header>
      <div id="logo">
        <img 
          src={logo}
          alt="puppy"
          id="logoImg"
        />
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
