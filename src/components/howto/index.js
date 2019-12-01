import React from "react";
import "./howto.scss";
import hotcup from "../../assets/hot-cup.png";
import coldcup from "../../assets/cold-cup.png";

const Howto = () => {
  return (
    <div className="howto">
      <h2>enjoy Rodo</h2>
      <div className="cols">
        <div className="col1">
          <h3>HOT</h3>
          <p>You can drink rodo, just as it is, for a nice hot hibiscus tea.</p>
          <img alt="hot zobo" src={hotcup} width={300} />
        </div>
        <div className="col2">
          <h3>Customize</h3>
          <p>
            Make your rodo unique to your tastes. With honey, or date syrup, or
            sweetener, or flavour extracts, or shaved ice, or pepper! Go crazy!
          </p>
        </div>
        <div className="col3">
          <h3>Cool</h3>
          <p>Or cold, for a nice chilled, refreshing beverage.</p>
          <img alt="hot zobo" src={coldcup} width={150} />
        </div>
      </div>
    </div>
  );
};

export default Howto;
