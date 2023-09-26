import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";
import { routes } from "./utils/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.newHero} element={<CreateSuperheroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
