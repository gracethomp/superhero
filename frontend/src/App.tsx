import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateSuperheroPage from "./pages/CreateSuperheroPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-superhero" element={<CreateSuperheroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
