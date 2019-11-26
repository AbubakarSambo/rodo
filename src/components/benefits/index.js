import React from "react";
import "./benefits.scss";
import benefits from "../../assets/benefits.png";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="description">
        <div className="caption text">BENEFITS</div>
        <span className="heading">benefits</span>
        <p className="benefittext">
          Rodo contains 100% natural ingredients, handpicked and carefully
          cleaned, with an added touch of motherly care.
        </p>
        <p className="benefittext">
          Rodo supports women, the ingredients are sourced from local women
          farmers. Rodo uses only natural ingredients that are great for your
          health. Rodo is fair trade.
        </p>
        <p className="benefittext">Rodo supports women</p>
        <p className="benefittext">Rodo is fair trade.</p>
      </div>
      <div className="imageContainer">
        <img alt="rodo logo" src={benefits} />
      </div>
    </div>
  );
};
export default Benefits;
