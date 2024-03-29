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
import TrainingDayOverview from "./Pages/TrainingDayOverview";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Container className="pt-5 d-flex flex-column">
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Training" element={<TrainingBlocks />} />
            <Route path="/training/:blockId" element={<Block />} />
            <Route
              path="/training/:blockId/:weekId"
              element={<TrainingDays />}
            />
            <Route
              path="/training/:blockId/:weekId/:dayId"
              element={<TrainingDay />}
            />
            <Route
              path="/training/:blockId/:weekId/:dayId/overview"
              element={<TrainingDayOverview />}
            />
          </Routes>
        </Container>
      </Router>
      <ToastContainer className="bg-none" />
    </>
  );
}

export default App;
