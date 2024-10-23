import { useEffect, useState } from "react";
import "../../index.css";

const User = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // API Call
    const timer = setInterval(() => {
      console.log("NAMASTE REACT functoinal OP ");
    }, 1000);
    console.log("useEffect");
    return () => {
      clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  console.log("render functional comp");
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h2>USer {props.name} Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button
      className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={() => {
          setCount(count+1);
        }}
      >
        Count
      </button>
    </div>
  );
};
export default User;