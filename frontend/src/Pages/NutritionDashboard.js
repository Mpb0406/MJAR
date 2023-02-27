import React, { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getWeightLogs } from "../features/Nutrition/WeightLogSlice";

const NutritionDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeightLogs());
  }, []);
  return (
    <div className="mt-5">
      <h1 className="text-light">Nutrition Dashboard</h1>
      <Nav.Link href="/nutrition/weightlog">Daily Weight Log</Nav.Link>
    </div>
  );
};

export default NutritionDashboard;
