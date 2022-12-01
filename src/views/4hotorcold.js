import React from "react";
import hotcup from "./../images/hot-cup-half.png";
import coldcup from "./../images/cold-cup-half.png";

const Hotorcold = (props) => {
  return (
    <section id="hotorcold">
      <div className="container">
        <div className="row">
          <div className="text-l float-md-right title brush cr">Enjoy Rodo</div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="cr v-text text-s hidden-md hidden-sm"> ENJOY RODO </div>
            <div className="container">
              <div className="row">
                <div className="text-l text-center title brush cb">HOT</div>
              </div>

              <div className="row">
                <div className="text-sm text font-weight-bold sub-title text-center cb">
                  You can drink rodo, just as it is, <br /> for a nice hot hibiscus tea.
                </div>
              </div>

              <div className="row">
                <div className="hotorcold-cup d-none d-lg-block">
                  <img src={hotcup} alt="benefits cup" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="container">
              <div className="row">
                <div className="text-l text-center title brush cr">CUSTOMISE</div>
              </div>

              <div className="row">
                <div className="text-sm text font-weight-bold sub-title text-center cr">
                  Make your rodo unique to your tastes. <br /> With honey, or date syrup, or sweetener, or flavour extracts, or shaved ice, or pepper!
                  Go crazy!
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-md-3 mx-auto"> */}
          <div className="col-md-4">
            <div className="container">
              <div className="row">
                <div className="text-l text-center title brush cw outline">COOL</div>
              </div>

              <div className="row">
                <div className="text-sm text font-weight-bold sub-title text-center cw outline">
                  Or cold, for a nice chilled, <br /> refreshing beverage.
                </div>
              </div>

              <div className="row">
                <div className="hotorcold-cup d-none d-lg-block">
                  <img src={coldcup} alt="benefits cup" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotorcold;
