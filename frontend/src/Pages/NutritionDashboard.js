import React from "react";
import { Button, Nav } from "react-bootstrap";

const NutritionDashboard = () => {
  return (
    <div className="mt-5">
      <h1 className="text-light">Nutrition Dashboard</h1>
      <Nav.Link href="/nutrition/weightlog">Daily Weight Log</Nav.Link>
    </div>
  );
};

export default NutritionDashboard;
