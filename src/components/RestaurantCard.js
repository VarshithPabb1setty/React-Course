import { CDN_URL } from "../utils/constants";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId = "",
    name = "",
    cuisines = "",
    costForTwo = "",
    avgRating = "",
    sla = "",
  } = resData?.info ?? {};
  return (
    <div className="restaurant-card" style={styleCard}>
      <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{costForTwo}</h6>
      <h6>{avgRating} stars</h6>
      <h6>{sla?.deliveryTime} min</h6>
    </div>
  );
};

export default RestaurantCard;
