import React from "react";
import Header from "./ui/common/Header";
import SuperheroCard from "./ui/cards/SuperheroCard";

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
