import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch the partivcular restaurant data here

  useEffect(() => {
    ///fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("API");
    const json = await data.json();

    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
