import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

const Header = () => {

  const [btnTitle, setBtnTitle] = useState("Login");

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src= { LOGO_URL }
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li><button className="loginBtn" onClick={()=>{
             if(btnTitle === 'Login') setBtnTitle("LogOut")
             else setBtnTitle("Login")
          }}>{btnTitle}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;