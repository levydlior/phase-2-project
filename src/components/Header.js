import React from "react";
import './../styles/header.css'
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div id="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6tvRJK--ykXSOmKaFCy9OtyzIQfE7tiWIw&usqp=CAU"
          alt="puppy"
          id="logoImg"
        />
        <h1>Welcome To This Website</h1>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
