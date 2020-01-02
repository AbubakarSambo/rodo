import React from "react";
import "./didyouknow.scss";
import Card from "./card";
import hibiscus from "../../assets/hibiscus.png";
import mint from "../../assets/mint.png";
import ginger from "../../assets/ginger.png";
import cloves from "../../assets/cloves.png";

const Didyouknow = () => {
  return (
    <div id="Didyouknow" className="didyouknow">
      <div className="didyouknow__header">
        <h2>Did you know?</h2>
        <h4>Rodo is great for your health</h4>
      </div>
      <div className="didyouknow__ingredients">
        <div className="didyouknow__card">
          <div className="caption">DID YOU KNOW</div>
          <Card
            image={hibiscus}
            text="Rich in Vitamins A, B-1 and C. Manages blood pressure, lowers
        cholesterol"
          />
          <Card
            image={mint}
            text="Aids in digestion. Mint is a stimulant that helps with weight loss. Quick nausea remedy"
          />
          <Card
            image={ginger}
            text="Helps fight against cold and flu Aids digestion. Prevents occurrence of stomach ulcer. Boosts bone healthMitigates obesity Good for heart health"
          />
          <Card
            image={cloves}
            text="Anti-inflammatory. Boosts immune system. Helps with bone preservation"
          />
        </div>
      </div>
    </div>
  );
};

export default Didyouknow;
