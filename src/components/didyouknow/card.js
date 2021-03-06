import React from "react";
import "./didyouknow.scss";

const Card = ({ image, text }) => {
  return (
    <div className="card">
      <h2>Hibiscus</h2>
      <img width="100px" alt="hibiscus" src={image} />
      <p>{text}</p>
    </div>
  );
};

export default Card;
