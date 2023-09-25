import { icons } from "../../../icons/icons";
import Button from "../button/Button";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <img src={icons.logo} alt="logo" />
        <h1>Superheroes</h1>
      </div>
      <Button variant="secondary">Add new superhero</Button>
    </header>
  );
};

export default Header;
