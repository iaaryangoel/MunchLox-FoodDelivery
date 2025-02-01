import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../Assets/assets";
import { Link } from "react-router-dom";
import { MyContext } from "../../Context/MyContext";

export default function Navbar({ setShowSignUp }) {
  const [navmenu, setNavmenu] = useState("Home");
  const handleNavmenu = (e) => {
    setNavmenu(e.target.getAttribute("value"));
  };

  const {getcartTotal} = useContext(MyContext)

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="nav-menu">
        <Link
          to="/"
          onClick={handleNavmenu}
          className={navmenu == "Home" ? "on" : ""}
          value="Home"
        >
          Home
        </Link>
        <a
          href="#short-menu"
          onClick={handleNavmenu}
          className={navmenu == "Menu" ? "on" : ""}
          value="Menu"
        >
          Menu
        </a>
        <a
          href="#download"
          onClick={handleNavmenu}
          className={navmenu == "Mobile App" ? "on" : ""}
          value="Mobile App"
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={handleNavmenu}
          className={navmenu == "Contact Us" ? "on" : ""}
          value="Contact Us"
        >
          Contact Us
        </a>
      </ul>
      <div className="right-nav">
        <img src={assets.search_icon} alt="" />
        <div className="nav-searchicon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getcartTotal()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowSignUp(true)} className="nav-btn">
          Sign Up
        </button>
      </div>
    </div>
  );
}
