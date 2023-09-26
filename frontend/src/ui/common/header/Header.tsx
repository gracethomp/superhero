import { NavLink } from "react-router-dom";
import { icons } from "../../../icons/icons";
import Button from "../button/Button";
import "./Header.css";
import { routes } from "../../../utils/routes";

const Header = () => {
  return (
    <header>
      <NavLink to={routes.home}>
        <div className="header-logo">
          <img src={icons.logo} alt="logo" />
          <p className="logo-text">Superheroes</p>
        </div>
      </NavLink>
      <NavLink to={routes.newHero}>
        <Button variant="secondary" icon={icons.plus}>
          Add new superhero
        </Button>
      </NavLink>
    </header>
  );
};

export default Header;
