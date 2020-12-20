/** @format */

import React from "react";
import "./SideNavBar.css";
import dashboard from "../src/assets/view-dashboard.png";

import settings from "../src/assets/settings.png";
import classroom from "../src/assets/class.png";

function SideNavBar() {
  return (
    <div className="sideNavBar">
      <div className="options">
        <img src={dashboard} alt="options" />
        <span>Dashboard</span>
      </div>
      <div className="options">
        <img src={classroom} alt="options" />
        <span>Class Room</span>
      </div>
      <div className="options">
        <img src={settings} alt="options" />
        <span>Ipsum</span>
      </div>
    </div>
  );
}

export default SideNavBar;
