import SuperheroCard from "../ui/cards/SuperheroCard";
import Header from "../ui/common/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="cards">
        <SuperheroCard />
        <SuperheroCard />
        <SuperheroCard />
        <SuperheroCard />
        <SuperheroCard />
      </div>
    </>
  );
};

export default Home;
