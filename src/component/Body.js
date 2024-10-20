import RestrauntCard from "./RestrauntCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredrRestaurants, setFilteredrRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

useEffect(() => {
  //API call 
  getRestaurants();
  //console.log(restaurants);
}, []);


const getRestaurants = async () => {
  const data = await fetch(
  //"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //got this second link from namaste react notes
  );
  const json = await data.json();
  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  
  setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredrRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
};

  function filterData(searchText, listOfRestaurants) {
    const filterData = listOfRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) :(
    <div className="body">
      <div className="filter">

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
              const data = filterData(searchText, listOfRestaurants);
              // update the state - restaurants
              setFilteredrRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            restaurantListJS = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.4);
            setFilteredrRestaurants(restaurantListJS);
            //console.log(restaurantListJS);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container restaurant-list">
        {/* <RestrauntCard resData={restrautList[0]} /> */}
        {/* when we do single return from code it can be use, the function body is assumed to be a single expression. */}
        {filteredrRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restraunt/" + restaurant.info.id}><RestrauntCard  resData={restaurant} /></Link>
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
