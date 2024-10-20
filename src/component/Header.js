import { LOGO_URL } from "../../utils/constanst";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
      Logo
      {<img
        className="logo"
        alt="logo"
        src={LOGO_URL}
      />}
    </a>
  );
  
const Header = () => {

  const [btnNameReact, SetBtnNameReact] = useState("Login");
  let btnName = "Login";

    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <li><button className="login-btn" onClick={()=>{
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