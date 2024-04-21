import RestrauntCard from "./RestrauntCard";  
import restrautList from "../../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search"></div>
        <div className="res-container restaurant-list">
        <RestrauntCard resData={restrautList[0]} />
        {/* when we do single return from code it can be use, the function body is assumed to be a single expression. */}
        {restrautList.map((restaurant) => (
          <RestrauntCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* When you use curly braces {} to define the function body, it becomes a block of code.
        Inside the block, you need to explicitly use the return statement to specify the value the function should return.
        it can be use with multiple line of code */}
        <b>Two different way</b>
        {restrautList.map((restaurant) => {
          return <RestrauntCard key={restaurant.data.id} resData={restaurant} />
        })}
        </div>
      </div>
    );
  };

export default Body;