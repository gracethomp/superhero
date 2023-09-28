import { Superhero } from "../../types";
import { routes } from "../../utils/routes";
import "./SuperheroCard.css";
import { FC } from "react";
import { useNavigate } from 'react-router-dom';

type SuperheroCardProps = {
  superhero: Superhero;
}

const SuperheroCard: FC<SuperheroCardProps> = (props) => {
  const navigate = useNavigate();
  const cardStyle = {
    backgroundImage: `url(${props.superhero.images?.at(0)})`, // to change
  };

  const handleClick = () => {
    navigate(routes.superhero + props.superhero.id);
  }

  return (
    <div className="card" onClick={handleClick}>
      <div className="superhero-card" style={cardStyle}>
        <p className="superhero-nickname">{props.superhero.nickname}</p>
      </div>
    </div>
  );
};

export default SuperheroCard;
