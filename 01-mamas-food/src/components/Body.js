import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(restaurantData);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = resData.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setResData(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
