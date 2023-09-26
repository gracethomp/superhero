import { icons } from "../icons/icons";
import Button from "../ui/common/button/Button";
import Header from "../ui/common/header/Header";
import Tag from "../ui/common/tag/Tag";
import "./Pages.css";

const SuperheroPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className="superhero-main">
          <img
            src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
            alt=""
            className="superhero-image"
          />
          <div className="superhero-text-data">
            <h1 className="superhero-nickname">IRON MAN</h1>
            <p className="real-name">Tony Stark</p>
            <p className="origin-description">
              He was born Kal-El on the planet Krypton, before being rocketed to
              Earth as an infant by his scientist father Jor-El, moments before
              Krypton's destruction...
            </p>
            <div>
              <h2 className="superpowers">Superpowers</h2>
              <div className="superpowers-tags">
                <Tag>solar energy absorption</Tag>
                <Tag>healing factor</Tag>
                <Tag>solar flare</Tag>
                <Tag>heat vision</Tag>
                <Tag>solar invulnerability</Tag>
                <Tag>flight</Tag>
              </div>
            </div>
            <div className="buttons">
              <Button variant="primary" icon={icons.pencil}>
                Edit
              </Button>
              <Button variant="caution">Delete</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SuperheroPage;
