import React from "react";
import benefitscup from "./../images/benefits-cups.png";

const Benefits = (props) => {
  return (
    <section id="benefits">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="container">
              <div className="text-l title brush cr">Benefits</div>

              <div className="text text-sm">
                <div className="cr v-text text-s hidden-md hidden-sm"> BENEFITS </div>
                <p>Rodo contains 100% natural ingredients, handpicked and carefully cleaned, with an added touch of motherly care.</p>
                <p>Rodo supports women, the ingredients are sourced from local women farmers. </p>
                <p>Rodo uses only natural ingredients that are great for your health. </p>
                <p>Rodo is fair trade.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="benefits-cup">
              <img src={benefitscup} alt="benefits cup" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
