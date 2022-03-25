import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customBootstrap.scss";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
