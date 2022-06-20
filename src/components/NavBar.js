import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
      <nav id="navBar">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/pets-list">
        Pets List
        </NavLink>
        <NavLink exact to="/section3">
          section
        </NavLink>
      </nav>
  );
}

export default NavBar;
