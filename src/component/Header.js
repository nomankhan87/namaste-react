import { LOGO_URL } from "../../utils/constanst";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

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

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <Title />
        <div className="flex items-center">
          <h1>online status {isOnline ? "✅" : "🔴"}</h1>
          <ul className="flex p-4 m-4">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact</Link></li>
            <li className="px-4">Cart</li>
            <li className="px-4"><Link to="/grocery">grocery</Link></li>
            <li className="px-4"><button className="login-btn" onClick={()=>{
              btnNameReact === "Login" ? 
              SetBtnNameReact("Logout") :
              SetBtnNameReact("Login")
              }}>{btnNameReact}</button></li>  
          </ul>
        </div>
      </div>
    );
  };

  export default Header;