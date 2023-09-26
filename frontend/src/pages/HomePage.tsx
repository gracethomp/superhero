import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SuperheroCard from "../ui/cards/SuperheroCard";
import Header from "../ui/common/header/Header";
import Pagination from "../ui/common/pagination/Pagination";
import { fetchAllSuperheroes } from "../store/services/superhero.services";
import { AppDispatch } from "../store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAllSuperheroes());
  }, [dispatch]);

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
