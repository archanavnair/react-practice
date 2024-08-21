import RestaurantCard from "./RestaurantCard";
import resObjList from "../utils/mockData";

import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";

//body component
const Body = () => {
  // Local State variable -- super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //console.log(listOfRestaurants);

  useEffect(() => {
    console.log("useEffect called"); //useEffect callback function wll be called immediately after the app is rendered
    //fetchData(); //to call live API
  }, []);

  const fetchData = async () => {
    const url = "https://www.swiggy.com/dapi/restaurants/list/update";
    const payload = {
      lat: 12.9715987,
      lng: 77.5945627,
      nextOffset: "CJhlELQ4KIDg/KPf4I/1ZDCnEw==",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
      filters: {},
      seoParams: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      page_type: "DESKTOP_WEB_LISTING",
      _csrf: "5akAv6IOMRmM-iapATRO6m70NqImfcyxkRbXplgs",
    };
    const data = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

  //setListOfRestaurants  to modify the state variable

  //conditional-rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">search</div> */}
      <button
        className="filterBtn"
        onClick={() => {
          {
            const filteredList = listOfRestaurants.filter(
              (res) => Number(res?.store?.rating?.text, 10) > 4.5
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.uuid} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
