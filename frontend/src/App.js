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

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container className="pt-5">
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Training" element={<TrainingBlocks />} />
            <Route path="/training/:blockId" element={<Block />} />
            <Route
              path="/training/:blockId/:weekId"
              element={<TrainingDays />}
            />
          </Routes>
        </Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
