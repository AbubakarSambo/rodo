import React, {useState} from "react";
import "./header.scss";
import logo from "../../assets/rodo.png";

const Header = () => {
  const [active, toggleActive] = useState(false)
  const clicked = () => {
    toggleActive(false)
  }
  return (
    <>
    <div className={`header ${!active ? 'inactive' : ''}`} >
      <a onClick={() => clicked()} href="#Home" className="header__item link">Home</a>
      <a onClick={() => clicked()} href="#Benefits" className="header__item link">Benefits</a>
      <div className="logo">
        <img width="100px" alt="rodo logo" src={logo} />
      </div>
      <a onClick={() => clicked()} href="#Didyouknow" className="header__item link">Did you know</a>
      <a onClick={() => clicked()} href="#Contact" className="header__item link">Contact</a>
      
    </div>
    <div className='burgercontainer' onClick={() => toggleActive(!active)}>
      <div className="logo">
        <img width="50px" alt="rodo logo" src={logo} />
      </div>
      <div className='burger'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </div>
    
  </>
  );
};
export default Header;
