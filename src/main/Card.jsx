import React from "react";
import "./Card.css";

function Card(props) {
  console.log(props.color);
  return (
    <div className="card-container" style={{ backgroundColor: props.color }}>
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
