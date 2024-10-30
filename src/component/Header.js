import { LOGO_URL } from "../../utils/constanst";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <a href="/">
      {<img
        className="logo max-w-28"
        alt="logo"
        src={LOGO_URL}
      />}
    </a>
  );
  
const Header = () => {

  const [btnNameReact, SetBtnNameReact] = useState("Login");
  let btnName = "Login";
  const isOnline = useOnline();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser)

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <Title />
        <div className="flex items-center">
          <h1>online status {isOnline ? "✅" : "🔴"}</h1>
          <ul className="flex p-4 m-4">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
            <li className="px-4"><Link to="/grocery">grocery</Link></li>
            <li className="px-4"><button className="login-btn" onClick={()=>{
              btnNameReact === "Login" ? 
              SetBtnNameReact("Logout") :
              SetBtnNameReact("Login")
              }}>{btnNameReact}</button></li>  
            <li className="px-4 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;