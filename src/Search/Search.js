/** @format */

import React from "react";
import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";

export default function Search() {
  return (
    <div className="search-wrapper">
      <div className="search-icon">
        <SearchIcon
          style={{ fontSize: "17px", padding: "8px", color: "#9D9D9D" }}
        />
      </div>
      <input placeholder="Search" />
    </div>
  );
}
