import { icons } from "../../icons/icons";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={icons.logo} alt="logo" />
      <h1>Superheroes</h1>
      
    </header>
  );
};

export default Header;
