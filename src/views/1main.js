import React from "react";
import Nav from "./0nav";
import bag from "./../images/pack.png";

const Main = (props) => {
  return (
    <section id="main">
      <Nav />
      <div className="container">
        <div className="row">
          <div className=" col-md-4">
            <div className="bag">
              <div className="cr v-text text-s hidden-md hidden-sm"> MAIN </div>
              <img src={bag} alt="bag" />
            </div>
          </div>

          <div className="col-md-7">
            <div className="text">
              <div className="text-s cw">Also called Roselle, or Rosella, Sorrel or Agua/Rosa de Jamaica or Bissap or Zobo...</div>
              <div className="text-l cw">Whatever you call it,</div>
              <div className="text-l brush cw">You've never had it</div>
              <div className="text-l brush cw">quite like this.</div>
              <div id="downarrow" className="text-l brush cr bounce">
                <i className=" fa fas fa-angle-double-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
