import RestaurantCard from "./RestaurantCard";
import resObjList from "../utils/mockData";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

//body component
const Body = () => {
  // Local State variable -- super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(
    resObjList[0].feedItems
  );

  const [filtredRestaurants, setFilteredRestaurants] =
    useState(listOfRestaurants);

  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    //console.log("useEffect called"); //useEffect callback function wll be called immediately after the app is rendered
    //fetchData(); //to call live API without waitiing for the API response
  }, []);

  console.log(searchTxt);

  const getFilteredRestaurants = () => {
    //Filter the restaurant cards and update the UI
    const filteredList = listOfRestaurants.filter((res) =>
      res?.store?.title?.text.toLowerCase().includes(searchTxt.toLowerCase())
    );

    setFilteredRestaurants(filteredList);
  };

  const fetchData = async () => {
    const url =
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update";
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
    setFilteredRestaurants(listOfRestaurants);
  };

  //setListOfRestaurants  to modify the state variable

  //conditional-rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are offline!! Please check your internet conection</h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
              if (e.target.value == "") {
                //on clear of the input field reset the list fo restaurant cards
                setFilteredRestaurants(listOfRestaurants);
              }
            }}
          />
          <button
            className="px-2 py-1 bg-green-200 m-2 rounded"
            onClick={getFilteredRestaurants}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-2 py-1 bg-gray-300 rounded"
            onClick={() => {
              {
                const filteredList = listOfRestaurants.filter(
                  (res) => Number(res?.store?.rating?.text, 10) > 4.5
                );
                console.log(filteredList);
                setFilteredRestaurants(filteredList);
              }
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap content-center">
        {filtredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.uuid} key={restaurant?.uuid}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
