import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENAPI, CDN_URL } from "../../utils/constanst";

import Shimmer from "./Shimmer";
import useRestrauntMenu from "../../utils/useRestrauntMenu";
const RestrauntMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();

  const restauraunt = useRestrauntMenu(resId); //fetch ogic moved in hook
  
  if (restauraunt === null) return <Shimmer />;  // it reolved undefined issue


  const styleCard = { backgroundColor: "#f0f0f0" };
  const styleImg = { "max-width": "200px" };

  console.log(restauraunt?.cards[2]);
  console.log(restauraunt?.cards[2]?.card?.card?.info?.cuisines)
  const { cuisines, costForTwoMessage, cloudinaryImageId } = restauraunt?.cards[2]?.card?.card?.info;

  console.log(  restauraunt?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
  const { itemCards } = restauraunt?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   return (
    <div className="menu">
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"  style={styleCard}>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restauraunt?.cards[2]?.card?.card?.info?.name}</h2>
        <img src={CDN_URL + cloudinaryImageId} style={styleImg} className="rounded-lg" />
        {/*<h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>*/}
        <h3>{costForTwoMessage}</h3> 
      </div>
      <div>
        <h1>Recommended Menu</h1>
        <ul className="">
          {Object.values(itemCards).map((item) => (
            <li key={item.card.info.id} className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
          ))}
        </ul>
      </div>
    </div>
    );
  };

  export default RestrauntMenu;