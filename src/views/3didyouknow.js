import React from "react";
import hibiscus from "./../images/hibiscus.png";
import mint from "./../images/mint.png";
import ginger from "./../images/ginger.png";
import cloves from "./../images/cloves.png";

const Didyouknow = (props) => {
  return (
    <section id="didyouknow">
      <div className="container">
        <div className="row">
          <div className="text-l text-center title brush cr">Did you Know?</div>
        </div>
        <div className="row">
          <div className="text-m sub-title text-center cr">Rodo is great for your health!</div>
        </div>

        <div className="row">
          <div className="col">
            <div className="cr v-text text-s hidden-md hidden-sm"> DID YOU KNOW </div>
            <div className="ingredients">
              <div className="title brush cr text-m">hibiscus</div>
              <img className="mx-auto  " src={hibiscus} alt="" />
              <p className="text-muted text">
                Rich in vitamins A, B-1 and C <br />
                Manages blood pressure
                <br />
                Lowers cholesterol <br />
              </p>
            </div>
          </div>
          <div className="col">
            <div className="ingredients">
              <div className="title brush cr text-m">mint</div>
              <img className="mx-auto  " src={mint} alt="" />
              <p className="text-muted text">
                Aids in digestion <br />
                Mint is a stimulant that helps with weight loss
                <br />
                Quick nausea remedy <br />
              </p>
            </div>
          </div>
          <div className="col">
            <div className="ingredients">
              <div className="title brush cr text-m">ginger</div>
              <img className="mx-auto  " src={ginger} alt="" />
              <p className="text-muted text">
                Helps fight against cold and flu <br />
                Aids digestion <br />
                Prevents occurrence of stomach ulcer <br />
                Boosts bone health <br />
                Mitigates obesity <br />
                Good for heart health <br />
              </p>
            </div>
          </div>
          <div className="col">
            <div className="ingredients">
              <div className="title brush cr text-m">cloves</div>
              <img className="mx-auto  " src={cloves} alt="" />
              <p className="text-muted text">
                Anti-inflammatory <br />
                Boosts immune system <br />
                Helps with bone preservation <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Didyouknow;
