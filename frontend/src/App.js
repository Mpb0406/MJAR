import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customBootstrap.scss";
import "./App.scss";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrainingBlocks from "./Pages/TrainingBlocks";
import Block from "./Pages/Block";
import TrainingDays from "./Pages/TrainingDays";
import { Container } from "react-bootstrap";
import TrainingDay from "./Pages/TrainingDay";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <Container className="pt-5 px-0 mx-0"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Training" element={<TrainingBlocks />} />
          <Route path="/training/:blockId" element={<Block />} />
          <Route path="/training/:blockId/:weekId" element={<TrainingDays />} />
          <Route
            path="/training/:blockId/:weekId/:dayId"
            element={<TrainingDay />}
          />
        </Routes>
        {/* </Container> */}
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
