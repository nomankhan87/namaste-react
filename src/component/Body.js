import RestrauntCard from "./RestrauntCard";
import restaurantList from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
    return filterData;
  }

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurants);
            // update the state - restaurants
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filyter-btn"
          onClick={() => {
            restaurantListJS = restaurants.filter((res) => res.data.avgRating > 3);
            setRestaurants(restaurantListJS);
            //console.log(restrautList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container restaurant-list">
        {/* <RestrauntCard resData={restrautList[0]} /> */}
        {/* when we do single return from code it can be use, the function body is assumed to be a single expression. */}
        {restaurants.map((restaurant) => (
          <RestrauntCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* When you use curly braces {} to define the function body, it becomes a block of code.
        Inside the block, you need to explicitly use the return statement to specify the value the function should return.
        it can be use with multiple line of code */}
        {/* <b>Two different way</b>
        {restrautList.map((restaurant) => {
          return (
            <RestrauntCard key={restaurant.data.id} resData={restaurant} />
          );
        })} */}
      </div>
    </div>
  );
};

export default Body;
