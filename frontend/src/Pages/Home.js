import React from "react";
import mjarHero from "../img/mjarHero.jpg";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="m-0 p-0 d-flex justify-content-start position-relative hero">
      <img src={mjarHero} className="img-fluid hero-img" alt="" />
      <div className="h-100 w-100 position-absolute img-overlay"></div>
      <h1 className="position-absolute text-light hero-text bg-none z-10 top-50 start-50 translate-50">
        Welcome to <br />{" "}
        <span className="bg-none logo-font space-text">MJAR</span>
      </h1>
      <div className="button-container bg-none position-absolute z-10">
        <Button variant="primary" size="lg" className="mx-3">
          Login
        </Button>
        <Button variant="secondary" size="lg" className="mx-3">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Home;
