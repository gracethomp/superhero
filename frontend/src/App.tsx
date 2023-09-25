import React from "react";

import SuperheroCard from "./ui/cards/SuperheroCard";
import Header from "./ui/common/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards">
        <SuperheroCard />
        <SuperheroCard />
        <SuperheroCard />
        <SuperheroCard />
        <SuperheroCard />
      </div>
    </div>
  );
}

export default App;
