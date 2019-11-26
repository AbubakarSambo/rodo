import React from "react";
import "./intro.scss";
import pack from "../../assets/pack.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="imageContainer">
          <div className="caption text">MAIN</div>
          <img alt="rodo logo" src={pack} />
        </div>
        <div className="description">
          <span className="line line_1">
            Also called Roselle, or Rosella, Sorrel or Agua/Rosa de Jamaica or
            Bissap or Zobo...
          </span>
          <span className="line line_2">Whatever you call it</span>
          <span className="line line_3">
            you've never had it quite like this
          </span>
        </div>
      </div>

      <div className="bouncer">
        <FontAwesomeIcon size="4x" icon={faAngleDoubleDown} />
      </div>
    </>
  );
};
export default Intro;
