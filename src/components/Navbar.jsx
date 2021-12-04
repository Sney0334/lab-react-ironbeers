import { NavLink} from "react-router-dom";
import home from "../assets/home.png";
import React from "react";

function Navbar() {
  return (
    <nav>
      <NavLink exact to="/">
        <img src={home} alt="home" />
      </NavLink>

     
    </nav>
  );
}

export default Navbar;
