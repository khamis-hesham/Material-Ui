import { createContext, useState } from "react";

const CardsContext = createContext();

function CardsProvider({ children }) {
  const butDisabled = useState(true);
  return (
    <CardsContext.Provider value={butDisabled}>
      {children}
    </CardsContext.Provider>
  );
}

export { CardsContext, CardsProvider as default };
