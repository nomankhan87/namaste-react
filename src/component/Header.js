import { LOGO_URL } from "../../utils/constanst";
import { useState } from "react";

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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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