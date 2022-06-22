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
          Apply For Adoption
        </NavLink>
        <NavLink exact to="/favorite-pets">
          My Favorite Pets
        </NavLink>
      </nav>

  );
}

export default NavBar;
