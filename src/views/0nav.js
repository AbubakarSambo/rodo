import React from "react";
import logo from "./../images/logos/logo_w.png";

const Nav = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item">
            <a className="nav-link text-sm" href="#main">
              main
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-sm" href="#benefits">
              benefits
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto my-2 order-0 order-md-1 position-relative">
        <a className="mx-auto" href="http://www.rodozee.com">
          <img className="logo" src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul className="navbar-nav mr-auto text-center">
          <li className="nav-item">
            <a className="nav-link text-sm" href="#didyouknow">
              did you know
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-sm" href="#contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
