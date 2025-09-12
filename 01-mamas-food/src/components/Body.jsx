import RestaurantCard from "./RestaurantCard";
import { restaurantData } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(restaurantData);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.18230&lng=78.02520&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="input-button"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
          }}
        />
        <button
          type="submit"
          className="search-button"
          onClick={() => {
            const filteredRestaurants = resData.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchData.toLowerCase());
            });
            setResData(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = resData.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setResData(filteredList);
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
