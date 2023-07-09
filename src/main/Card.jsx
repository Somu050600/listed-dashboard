import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <div>
        <img src={process.env.PUBLIC_URL + props.img_url} alt="" />
      </div>
      <div>
        <span>{props.title}</span>
      </div>
      <div>
        <span>{props.count}</span>
      </div>
    </div>
  );
}

export default Card;
