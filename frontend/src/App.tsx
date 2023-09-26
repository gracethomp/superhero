import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import { routes } from "./utils/routes";
import SuperheroPage from "./pages/SuperheroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.newHero} element={<CreateSuperheroPage />} />
        <Route path={routes.superhero + ':id'} element={<SuperheroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
