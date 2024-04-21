import { LOGO_URL } from "../../utils/constanst";

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
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;