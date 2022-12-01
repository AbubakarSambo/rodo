import React from "react";
import logo from "./../images/logos/logo_w.png";

const Footer = (props) => {
  return (
    <section id="footer">
      <div className="container-fluid">
        <div className="row-fluid">
          <div className=" w-100 dual-collapse2 order-1 order-md-0">
            <ul className="list-inline float-left">
              <li className="list-inline-item">
                <a href="mailto:talkto.proseeds@gmail.com">
                  <span className="cw text-s">
                    <i className=" fa fas fa-envelope"></i> talkto.proseeds@gmail.com
                  </span>
                </a>
              </li>
              <li className="list-inline-item">
                <span className="cw text-s">
                  <i className=" fa fas fa-phone"></i>
                  <a href="tel:+2348159329864"> +234 (0) 815 932 9864</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="mx-auto my-2 order-0 order-md-1 position-relative  d-none d-sm-block">
            <div className="mx-auto">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </div>
          <div className=" w-100  order-2 order-md-2">
            <ul className="list-inline float-right">
              <li className="list-inline-item">
                <span className="cw">
                  <a href="https://www.facebook.com/rodozee">
                    <i className=" fa fas fa-facebook-f"></i>
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="cw">
                  <a href="https://www.twitter.com/_rodozee">
                    <i className=" fa fas fa-twitter"></i>
                  </a>
                </span>
              </li>
              <li className="list-inline-item">
                <span className="cw">
                  <a href="http://www.instagram.com/rodozee">
                    <i className=" fa fas fa-instagram"></i>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
