import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import { routes } from "./utils/routes";
import SuperheroPage from "./pages/SuperheroPage";
import EditSuperheroPage from "./pages/EditSuperheroPage";
import Alert from "./ui/common/alert/Alert";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.newHero} element={<CreateSuperheroPage />} />
          <Route path={routes.superhero + ":id"} element={<SuperheroPage />} />
          <Route path={routes.editSuperhero} element={<EditSuperheroPage />} />
        </Routes>
      </BrowserRouter>
      <Alert />
    </>
  );
}

export default App;
