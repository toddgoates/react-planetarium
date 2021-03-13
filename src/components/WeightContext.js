import React, { useState, createContext } from "react";

const WeightContext = createContext();

export function WeightProvider({ children }) {
  const [weight, setWeight] = useState(0);

  return (
    <WeightContext.Provider value={[weight, setWeight]}>
      {children}
    </WeightContext.Provider>
  );
}

export default WeightContext;
