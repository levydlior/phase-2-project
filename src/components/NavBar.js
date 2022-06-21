import React from "react";
import { NavLink } from "react-router-dom";


function NavBar () {
  return (
    <nav id="navBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/surrender-pet">
        Surrender Your Pet
      </NavLink>
      <NavLink exact to="/section3">
        section
      </NavLink>
    </nav>
  );
}

export default NavBar;
