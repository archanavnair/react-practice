import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  // const [resInfo, setResInfo] = useState(null);

  const params = useParams();
  const {resId } = params; 
  console.log(params)//this is how you fetch the URL parameters ad se as u wish in the program

  const resInfo = useRestaurantMenu(resId);//creating custom Hook

  if(resInfo === null) return <Shimmer />; // resInfo is not availaable until the APi returnsand hence handleee the null data here 

// useEffect(() => {

  //fetchMenu();//call the api
// },[]);///commented because of customHooks

// fetchMenu = async () => {
//    const data = await fetch("API");
//      const json = await data.json();

//      setResInfo(json);
// }

  return (
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