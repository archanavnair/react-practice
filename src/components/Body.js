import RestaurantCard from "./RestaurantCard";
import resObjList from "../utils/mockData";

import { useState } from "react";

//body component
const Body = () => {
  // Local State variable -- super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resObjList);
  //setListOfRestaurants  to modify the state variable
  return (
    <div className="body">
      {/* <div className="search">search</div> */}
      <button
        className="filterBtn"
        onClick={() => {
          {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurants(filteredList);
          }
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
