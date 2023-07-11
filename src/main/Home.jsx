import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import Activities from "./Activities";
import Products from "./Products";
import Schedule from "./Schedule";
import "./Home.css";

function Home(props) {
  const location = useLocation();

  const [isMenu, setIsMenu] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const profilePhoto = queryParams.get("photo");
  const name = queryParams.get("name");
  const userPlaceholderAlt = process.env.PUBLIC_URL + "/icons/user.png";

  useEffect(() => {
    document.title = name ? "Hi " + name : "Welcome Home!";
  }, [name]);

  const cards = [
    {
      title: "Total Revenue",
      count: "$2,129,430",
      img_url: "/icons/revenue.png",
      color: "#DDEFE0",
    },
    {
      title: "Total Transitions",
      count: "1520",
      img_url: "/icons/Transactions.png",
      color: "#F4ECDD",
    },
    {
      title: "Total Likes",
      count: "9721",
      img_url: "/icons/like.png",
      color: "#EFDADA",
    },
    {
      title: "Total Users",
      count: "892",
      img_url: "/icons/users.png",
      color: "#DEE0EF",
    },
  ];
  const cardsJson = JSON.stringify(cards);
  const cardsArray = JSON.parse(cardsJson);

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="home-container">
      <Navbar isMenu={isMenu} />
      <div className="home-main-container">
        <div className="home-header">
          <div
            className={isMenu ? "menu-icon2" : "menu-icon1"}
            onClick={handleMenu}
          ></div>
          <strong>Dashboard</strong>
          <div className="search-div">
            <input type="search" placeholder="Search..." />
            <img src={process.env.PUBLIC_URL + "/icons/search.png"} alt="img" />
          </div>
          <img
            src={process.env.PUBLIC_URL + "/icons/notification.png"}
            alt="img"
          />
          <img
            style={{ borderRadius: "50%" }}
            src={profilePhoto ? profilePhoto : userPlaceholderAlt}
            alt=""
          />
        </div>
        <div className="cards-container">
          {cardsArray.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              count={card.count}
              img_url={card.img_url}
              color={card.color}
            />
          ))}
        </div>
        <div className="activities-container">
          <span>Activities</span>
          <Activities />
        </div>
        <div className="home-bottom-container">
          <div className="products-container">
            <Products />
          </div>
          <div className="home-schedule-container">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
