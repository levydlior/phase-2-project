import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
      <nav id="navBar">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/section2">
          Section 1
        </NavLink>
        <NavLink exact to="/section3">
          Section 2
        </NavLink>
      </nav>
  );
}

export default NavBar;
