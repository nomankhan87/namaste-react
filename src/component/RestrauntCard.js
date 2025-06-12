import { useContext } from "react";
import { CDN_URL } from "../../utils/constanst";
import UserContext from "../../utils/UserContext";

export const withPromoRestrauntCard = (RestrauntCard) => {
  return (props) => {
    console.log(props);
    return (
      <div>
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestrauntCard {...props}  />
      </div>
    )    
  }

}

const RestrauntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, lastMileTravelString } =
    resData?.info;
    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);
    //two way to handle props in component
// const RestrauntCard = ({
//   cloudinaryImageId,
//   name,
//   cuisines,
//   avgRating,
//   lastMileTravelString,
// }) => {


  //Array destructuring
  // var fruits  = ['Banana', 'Apple', 'Mango', 'Orange’];
  // var [firstFruit, secondFruit, ...rest] = fruits;

  // console.log(firstFruit); // Outputs 'Banana'
  // console.log(secondFruit); // Outputs 'Apple'
  // console.log(rest); // Outputs ['Mango', 'Orange’ ]

  
  //Object destructuring
  // var contact = { names: 'daniyal', age: 23, email: 'daniyalnagori@yahoo.com' } 
  // var { names = 'zeeshan', age, email, phone = '03170113001' } = contact;

  // console.log(names); // Outputs 'daniyal'
  // console.log(phone); // Outputs '03170113001l'

  
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img src={CDN_URL + cloudinaryImageId}
        className="rounded-lg"
      />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} stars</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <h4>User : {loggedInUser} </h4>
    </div>
  );
};

export default RestrauntCard;
