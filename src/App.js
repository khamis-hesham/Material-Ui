import React from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import CardsProvider from "./context/CardsContext.js";

function App() {
  return (
    <CardsProvider>
      <Header />
      <Cards />
    </CardsProvider>
  );
}

export default App;
