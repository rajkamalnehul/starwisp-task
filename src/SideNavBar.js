/** @format */

import React from "react";
import "./SideNavBar.css";
import dashboard from "../src/assets/view-dashboard.png";

import settings from "../src/assets/settings.png";
import classroom from "../src/assets/class.png";
import { Link } from "react-router-dom";

function SideNavBar() {
  return (
    <div className="sideNavBar">
      <div className="options">
        <img src={dashboard} alt="options" />
        <Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>
          <div className="navbar-item">Dashboard</div>
        </Link>
      </div>
      <div className="options">
        <img src={classroom} alt="options" />
        <Link to="/class" style={{ color: "#FFF", textDecoration: "none" }}>
          <div className="navbar-item">Class</div>
        </Link>
      </div>
      <div className="options">
        <img src={settings} alt="options" />
        <div className="navbar-item">Ipsum</div>
      </div>
    </div>
  );
}

export default SideNavBar;
