import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";

import { BiUser, BiCart } from "react-icons/bi";
function Header() {
  return (
    <div className="inner">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="" className="logo-image" />
        </div>
        <div className="search-container">
          <input type="text" className="search-field" />
          <FaSearch className="search-icon" />
        </div>
        <div className="other">
          <BiUser className="other-user" />
          <BiCart className="other-cart" />
        </div>
      </div>
    </div>
  );
}

export default Header;
