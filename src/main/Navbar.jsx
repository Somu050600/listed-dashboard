import React, { useEffect, useState } from "react";
// import DashboardIcon from "../../public/icons/Dashboard.png";
import "./Navbar.css";

function Navbar(props) {
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    setIsMenu(props.isMenu);
  }, [props.isMenu]);
  return (
    <div className={isMenu ? "nav-container active" : "nav-container"}>
      <div className="nav-logo">
        <strong>Board.</strong>
      </div>
      <div className="nav-list">
        <a href="/home">
          <img
            src={process.env.PUBLIC_URL + "/icons/Dashboard.png"}
            alt="img"
          />
          <span style={{ fontWeight: 700 }}>Dashboard</span>
        </a>
        <a href="/home">
          <img
            src={process.env.PUBLIC_URL + "/icons/Transactions.png"}
            alt="img"
          />
          <span>Transactions</span>
        </a>
        <a href="/home">
          <img src={process.env.PUBLIC_URL + "/icons/Schedule.png"} alt="img" />
          <span>Schedules</span>
        </a>
        <a href="/home">
          <img src={process.env.PUBLIC_URL + "/icons/user.png"} alt="img" />
          <span>Users</span>
        </a>
        <a href="/home">
          <img src={process.env.PUBLIC_URL + "/icons/settings.png"} alt="img" />
          <span>Settings</span>
        </a>
      </div>
      <div className="nav-bottom">
        <a href="/home">Help</a>
        <a href="/home">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
