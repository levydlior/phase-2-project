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
        <NavLink exact to="/adoption-form">
          Apply for Adoption
        </NavLink>
      </nav>

  );
}

export default NavBar;
