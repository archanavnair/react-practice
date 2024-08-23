import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const Header = () => {

  const [btnTitle, setBtnTitle] = useState("Login");

  //if no dependency array => useEffect called on each component rendering;
  //if ependency array is empty => useEffect is called only once the component is initially rendered
  //if depenndency array has some value ==> only and every time the value changes
  useEffect(() => {
    console.log("useEffect rendered")
  },[btnTitle])

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><button className="loginBtn" onClick={ () => {
             btnTitle === 'Login' ?  setBtnTitle("LogOut") : setBtnTitle("Login")
          }}>{btnTitle}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;