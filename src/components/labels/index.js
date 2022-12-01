import React from "react";
import "./intro.scss";
import pack from "../../assets/pack.png";
import hibiscus from "../../assets/hibiscus.png";
import mint from "../../assets/mint.png";
import ginger from "../../assets/ginger.png";
import cloves from "../../assets/cloves.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const Label = () => {
  return (
    <>
      <div id="Label" className="intro label-section">
        <div className="imageContainer border-ingredients-container">
          <img alt="rodo logo" src={pack} />
          <div className="bordered-ingredient hibiscus"> <div className="title">Hibiscus</div> <img src={hibiscus} alt="" /></div>
          <div className="bordered-ingredient mint"> <div className="title">Mint</div> <img src={mint} alt="" /></div>
          <div className="bordered-ingredient ginger"> <div className="title">Ginger</div> <img src={ginger} alt="" /></div>
          <div className="bordered-ingredient cloves"> <div className="title">Cloves</div> <img src={cloves} alt="" /></div>
        </div>
      </div>
    </>
  );
};
export default Label;
