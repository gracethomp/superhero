import { useAppDispatch } from "../hooks/redux";
import { clearCurrentHero } from "../store/slices/superheroes.slice";
import Header from "../ui/common/header/Header";
import Form from "../ui/forms/Form";
import { useEffect } from "react";

const CreateSuperheroPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCurrentHero());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Form title="Create superhero" />
      </main>
    </>
  );
};

export default CreateSuperheroPage;
