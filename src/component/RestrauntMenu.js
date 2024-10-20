import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENAPI, CDN_URL } from "../../utils/constanst";

import Shimmer from "./Shimmer";
const RestrauntMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();

  const [restauraunt ,setRestauraunt] = useState(null)

  useEffect(() => {
    fetchMenu();
  }, [])


  const fetchMenu = async () => {
    const data = await fetch(MENAPI + resId);
    const json = await data.json();
    console.log(json.data.cards[2].card.card.info);
    setRestauraunt(json.data);
  }

  
  if (restauraunt === null) return <Shimmer />;  // it reolved undefined issue


  const styleCard = { backgroundColor: "#f0f0f0" };

  console.log(restauraunt?.cards[2]);
  console.log(restauraunt?.cards[2]?.card?.card?.info?.cuisines)
  const { cuisines, costForTwoMessage, cloudinaryImageId } = restauraunt?.cards[2]?.card?.card?.info;

  console.log(restauraunt?.cards[2]);

  // const { itemCards } = restauraunt?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.;



   return (
    <div className="menu" style={styleCard}>
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restauraunt?.cards[2]?.card?.card?.info?.name}</h2>
        <img src={CDN_URL + cloudinaryImageId} className="styleImg" />
        {/*<h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>*/}
        <h3>{costForTwoMessage}</h3> 
      </div>
      <div>
        {/* <h1>Menu</h1> */}
        <ul>
          {/* {Object.values(restauraunt?.cards[2]?.card?.card?.info?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))} */}
        </ul>
      </div>
    </div>
    );
  };

  export default RestrauntMenu;