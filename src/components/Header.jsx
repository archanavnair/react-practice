import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnTitle, setBtnTitle] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //if no dependency array => useEffect called on each component rendering;
  //if ependency array is empty => useEffect is called only once the component is initially rendered
  //if depenndency array has some value ==> only and every time the value changes
  useEffect(() => {
    console.log("useEffect rendered")
  },[btnTitle])
 

  return (
    <div className="flex justify-between bg-pink-200 shadow-xl m-2">
      <div>
        <img
          className="w-32"
          src= { LOGO_URL }
        ></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4">
          <li className="px-4">Online status : {onlineStatus ? "✅"  : "🅾️" }</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><button className="bg-red-400 p-1 rounded" onClick={ () => {
             btnTitle === 'Login' ?  setBtnTitle("LogOut") : setBtnTitle("Login")
          }}>{btnTitle}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;