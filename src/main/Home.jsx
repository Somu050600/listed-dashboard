import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Activities from "./Activities";
import Products from "./Products";
import Schedule from "./Schedule";
import "./Home.css";

function Home(props) {
  const cards = [
    {
      title: "Total Revenue",
      count: "$2,129,430",
      img_url: "/icons/revenue.png",
    },
    {
      title: "Total Transitions",
      count: "1520",
      img_url: "/icons/Transactions.png",
    },
    {
      title: "Total Likes",
      count: "9721",
      img_url: "/icons/like.png",
    },
    {
      title: "Total Users",
      count: "892",
      img_url: "/icons/users.png",
    },
  ];
  const cardsJson = JSON.stringify(cards);
  const cardsArray = JSON.parse(cardsJson);
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-main-container">
        <div className="home-header">
          <strong>Dashboard</strong>
          <div className="search-div">
            <input type="search" placeholder="Search..." />
            <img src={process.env.PUBLIC_URL + "/icons/search.png"} alt="img" />
          </div>
          <img
            src={process.env.PUBLIC_URL + "/icons/notification.png"}
            alt="img"
          />
          <img src={process.env.PUBLIC_URL + "/icons/user.png"} alt="img" />
        </div>
        <div className="cards-container">
          {cardsArray.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              count={card.count}
              img_url={card.img_url}
            />
          ))}
        </div>
        <div className="activities-container">
          <Activities />
        </div>
        <div className="home-bottom-container">
          <div className="products-container">
            <Products />
          </div>
          <div className="schedule-container">
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
