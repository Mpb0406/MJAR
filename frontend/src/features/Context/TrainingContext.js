import { createContext, useContext, useState } from "react";

const TrainingContext = createContext();

export const StateContext = ({ children }) => {
  // State Data
  const [showLift, setShowLift] = useState(false);
  const [lift, setLift] = useState(null);
  const [set, setSet] = useState(null);
  const [showSet, setShowSet] = useState(false);
  const [showDeleteSet, setShowDeleteSet] = useState(false);
  const [showDeleteLift, setShowDeleteLift] = useState(false);
  const [adjustedWeight, setAdjustedWeight] = useState(true);

  // State Functions

  // Open New Lift Modal
  const handleOpenLift = () => setShowLift(true);

  // Open new Set Modal
  const handleOpenSet = (e) => {
    setLift(e.target.id);
    setShowSet(true);
  };

  // Open Delete Set Modal
  const handleOpenDeleteSet = (e) => {
    setSet(e.target.id);
    setLift(e.target.getAttribute("name"));
    setShowDeleteSet(true);
  };

  //   Open Delete Lift Modal
  const handleOpenDeleteLift = (e) => {
    setLift(e.target.id);
    setShowDeleteLift(true);
    console.log(lift);
  };

  // Toggle Adjusted Working Weight and Normally Calculated Working Weight
  const toggleWeight = () => setAdjustedWeight(!adjustedWeight);

  return (
    <TrainingContext.Provider
      value={{
        showLift,
        setShowLift,
        lift,
        setLift,
        set,
        setSet,
        showSet,
        setShowSet,
        showDeleteSet,
        setShowDeleteSet,
        showDeleteLift,
        setShowDeleteLift,
        adjustedWeight,
        handleOpenLift,
        handleOpenSet,
        handleOpenDeleteSet,
        handleOpenDeleteLift,
        toggleWeight,
      }}>
      {children}
    </TrainingContext.Provider>
  );
};

export const useStateContext = () => useContext(TrainingContext);
