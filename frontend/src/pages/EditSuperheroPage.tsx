import { useAppSelector } from "../hooks/redux";
import Header from "../ui/common/header/Header";
import Form from "../ui/forms/Form";

const EditSuperheroPage = () => {
  const superhero = useAppSelector(
    (state) => state.superheroes.currentSuperhero
  );

  return (
    <>
      <Header />
      <main>
        <Form title="Edit superhero" superhero={superhero} />
      </main>
    </>
  );
};

export default EditSuperheroPage;
