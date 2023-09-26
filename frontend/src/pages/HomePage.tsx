import SuperheroCard from "../ui/cards/SuperheroCard";
import Header from "../ui/common/header/Header";
import Pagination from "../ui/common/pagination/Pagination";

const HomePage = () => {
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
      <Pagination />
    </>
  );
};

export default HomePage;
