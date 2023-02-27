import React, { createContext, useContext, useState } from "react";

const TrainingContext = createContext();

export const StateContext = ({ children }) => {
  // State Data
  const [activeLift, setActiveLift] = useState("");
  return (
    <TrainingContext.Provider value={{ activeLift, setActiveLift }}>
      {children}
    </TrainingContext.Provider>
  );
};

export const useStateContext = () => useContext(TrainingContext);
