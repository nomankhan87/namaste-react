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
    <div className="componentBg">
      <h2>USer {props.name} Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button
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