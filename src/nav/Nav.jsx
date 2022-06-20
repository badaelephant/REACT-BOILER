import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="inner">
      <div className="nav-container">
        <div className="nav-item">
          <div className="nav-title">Europe</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">Asia</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">North America</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">South America</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">Oceania</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
