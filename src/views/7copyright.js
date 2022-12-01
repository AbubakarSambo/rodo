import React from "react";

const Copyright = (props) => {
  return (
    <section id="copyright">
      <div className="container-fluid">
        <div className="row-fluid">
          <span className="cw text-s">
            <p className="text-capitalize">
              RODOZEE.COM <i className="fa fa-copyright" aria-hidden="true"></i> {new Date().getFullYear()} | RODO, A TRADING NAME OF PROSEEDS
              WORLDWIDE LIMITED, REGISTERED IN NIGERIA, WEST AFRICA.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Copyright;
