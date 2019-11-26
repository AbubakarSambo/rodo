import React from "react";
import "./header.scss";
import logo from "../../assets/rodo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__item link">Home</div>
      <div className="header__item link">benefits</div>
      <div className="logo">
        <img width="100px" alt="rodo logo" src={logo} />
      </div>
      <div className="header__item link">did you know</div>
      <div className="header__item link">contact</div>
    </div>
  );
};
export default Header;
