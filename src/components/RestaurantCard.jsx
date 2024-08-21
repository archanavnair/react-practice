import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { cloudinaryImageId, title, avgRating } = resData?.data?.feedItems;
  // const { deliveryTime } = resData?.info?.sla;


  return (
    <div className="restaurant-card">
      <img
        className="restaurant-img"
        src={
          resData?.store?.image?.items[0].url
        }
        alt="image"
      ></img>
      <h3 style={{ textAlign: "center" }}>{resData?.store?.title?.text}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h5>{resData?.store?.rating?.text} stars</h5>
      <h5>{resData?.store?.meta[0]?.text} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;