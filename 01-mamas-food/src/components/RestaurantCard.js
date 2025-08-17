import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, areaName } =
    restaurant?.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        alt="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="card-details">{name}</h3>
      <h4 className="card-details">{avgRating}/5 ratings</h4>
      <h4 className="card-details">{cuisines.join(", ")}</h4>
      <h4 className="card-details">{areaName}</h4>
    </div>
  );
};

export default RestaurantCard;
