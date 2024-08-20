import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="pho"
      ></img>
      <h3 style={{ textAlign: "center" }}>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;