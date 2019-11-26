import React from "react";
import "./didyouknow.scss";
import Card from "./card";

const Didyouknow = () => {
  return (
    <div className="didyouknow">
      <div className="didyouknow__header">
        <h2>Did you know?</h2>
        <h4>Rodo is great for your health</h4>
      </div>
      <div className="didyouknow__ingredients">
        {/* <div className="caption">DID YOU KNOW</div> */}
        {/* <div className="didyouknow__card">
          <Card />
          <Card />
          <Card />
          <Card />
        </div> */}
      </div>
    </div>
  );
};

export default Didyouknow;
