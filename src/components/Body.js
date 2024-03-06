import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // or

  // let arr = useState(resList);
  // let [listOfRestaurants, setListOfRestaurants] = arr;
  
  // or
  // let arr = useState(resList);
  // let listOfRestaurants = arr[0];
  // let setListOfRestaurants = arr[1];


  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredData = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            console.log(filteredData);
            setListOfRestaurants(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
