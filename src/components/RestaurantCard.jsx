import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;

  // const { cloudinaryImageId, title, avgRating } = resData?.data?.feedItems;
  // const { deliveryTime } = resData?.info?.sla;


  return (
    <div className="m-4 p-4 w-[250px] h-[300px] bg-yellow-100 shadow-lg rounded hover:bg-orange-400 hover:shadow-2xl">
      <img
        className="restaurant-img"
        src={
          resData?.store?.image?.items[0].url
        }
        alt="image"
      ></img>
      <h3 className="font-bold py-4 text-lg">{resData?.store?.title?.text}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h5>{resData?.store?.rating?.text ?? 0} stars</h5>
      <h5>{resData?.store?.meta[0]?.text} </h5>
    </div>
  );
};

export default RestaurantCard;