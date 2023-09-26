import "./SuperheroCard.css";

const SuperheroCard = () => {
  const cardStyle = {
    backgroundImage: `url(https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg)`,
  };
  return (
    <div className="card">
      <div className="superhero-card" style={cardStyle}>
        <p className="superhero-nickname">Superhero</p>
      </div>
    </div>
  );
};

export default SuperheroCard;
