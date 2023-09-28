import { useEffect } from "react";
import SuperheroCard from "../ui/cards/SuperheroCard";
import Header from "../ui/common/header/Header";
import Pagination from "../ui/common/pagination/Pagination";
import { fetchAllSuperheroes, fetchTotalCount } from "../store/services/superhero.services";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Superhero } from "../types";
import { clearCurrentHero } from "../store/slices/superheroes.slice";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const superheroes: Superhero[] = useAppSelector(
    (state) => state.superheroes.superheroes
  );
  const page = useAppSelector((state) => state.superheroes.page);

  useEffect(() => {
    dispatch(clearCurrentHero());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(fetchTotalCount())
    dispatch(fetchAllSuperheroes(page));
  }, [dispatch, page]);

  return (
    <>
      <Header />
      <div className="cards">
        {superheroes.map((superhero) => (
          <SuperheroCard key={superhero.id} superhero={superhero} />
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default HomePage;
