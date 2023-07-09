import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <strong>Board.</strong>
      </div>
      <div className="nav-list">
        <a href="/">
          <img src="" alt="" />
          <span>Dashboard</span>
        </a>
        <a href="/">
          <img src="" alt="" />
          <span>Transactions</span>
        </a>
        <a href="/">
          <img src="" alt="" />
          <span>Schedules</span>
        </a>
        <a href="/">
          <img src="" alt="" />
          <span>Users</span>
        </a>
        <a href="/">
          <img src="" alt="" />
          <span>Settings</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
