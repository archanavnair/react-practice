import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  console.log(params)//this is how you fetch the URL parameters ad se as u wish in the program

useEffect(() => {

  //fetchMenu();//call the api
},[]);

fetchMenu = async () => {
   const data = await fetch("API");
     const json = await data.json();

     setResInfo(json)
;}

  return resInfo === null ? <Shimmer /> : (
    <div className ="menu">
       <h1>Name of the Restaurant</h1>{/*{resInfo.nameOfRes} */}
      <h2>Menu</h2>
      <ul>
        <li>Appetizers</li>
        <li>Main Course</li>
        <li>Cocktails</li>
      </ul>
    </div>
  )
}

export default RestaurantMenu