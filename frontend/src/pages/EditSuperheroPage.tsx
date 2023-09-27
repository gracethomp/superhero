import { useAppSelector } from "../hooks/redux";
import Button from "../ui/common/button/Button";
import Header from "../ui/common/header/Header";
import Form from "../ui/forms/Form";
import { NavLink } from "react-router-dom";
import { routes } from "../utils/routes";

const EditSuperheroPage = () => {
  const superhero = useAppSelector(
    (state) => state.superheroes.currentSuperhero
  );

  return (
    <>
      <Header />
      <main>
        {superhero ? (
          <Form title="Edit superhero" superhero={superhero} />
        ) : (
          <>
            <p>Please pick superhero before editing</p>
            <NavLink to={routes.home}>
              <Button variant="primary">Back to Home</Button>
            </NavLink>
          </>
        )}
      </main>
    </>
  );
};

export default EditSuperheroPage;
