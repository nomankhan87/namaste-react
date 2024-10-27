import RestrauntCard, {withPromoRestrauntCard} from "./RestrauntCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredrRestaurants, setFilteredrRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  RestrauntCardPromoted = withPromoRestrauntCard(RestrauntCard)

useEffect(() => {
  //API call 
  getRestaurants();
  console.log(filteredrRestaurants);
}, []);


const { loggedInUser, setUserName } = useContext(UserContext);

const getRestaurants = async () => {
  const data = await fetch(
  //"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    //got this second link from namaste react notes
    //"https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    //new link full data from browser
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

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
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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

        <div className="search m-4 p-4 flex items-center">
        <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
            restaurantListJS = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.4);
            setFilteredrRestaurants(restaurantListJS);
            //console.log(restaurantListJS);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

      </div>

      <div className="flex flex-wrap border-primary">
        {/* <RestrauntCard resData={restrautList[0]} /> */}
        {/* when we do single return from code it can be use, the function body is assumed to be a single expression. */}
        {filteredrRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restraunt/" + restaurant.info.id}>            
            {restaurant?.info?.id == '588619' ? (
              <RestrauntCardPromoted resData={restaurant} />
            ):(
              <RestrauntCard resData={restaurant} /> 
            )}
            </Link>
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
