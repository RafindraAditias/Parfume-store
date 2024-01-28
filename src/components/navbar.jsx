import React from "react";
import { Link } from "react-router-dom";
import "./components.css";
import LogoNav from "./img/Nama 1-01.png"

const Navbar = () => {
  return (
    <nav className="Navbar">
    <div class="navigation-bar-left">
      <img src={LogoNav} alt="navigation-logo" />
    </div>
      <ul className="navigation-bar-right">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="about">ABOUT US</Link>
        </li>
        <li>
          <Link to="contact">CONTACT</Link>
        </li>
      </ul>
  </nav>
  );
};

export default Navbar;
