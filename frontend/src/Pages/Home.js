import React, { useState, useEffect } from "react";
import mjarHero from "../img/mjarHero.jpg";
import { Button } from "react-bootstrap";
import Features from "../Components/Features";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Placeholder } from "react-bootstrap";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, [user]);

  return (
    <>
      <div className="d-flex justify-content-start position-relative hero">
        <img src={mjarHero} className="img-fluid hero-img" alt="" />
        <div className="h-100 w-100 position-absolute img-overlay"></div>
        <h1 className="position-absolute text-light hero-text bg-none z-10 top-50 start-50 translate-50">
          Welcome to <br />{" "}
          <span className="bg-none logo-font space-text">MJAR</span>
        </h1>

        {loading ? (
          <div className="button-container bg-none position-absolute z-10 w-100 d-flex justify-content-center">
            <Placeholder.Button />
            <Placeholder.Button />
          </div>
        ) : (
          <div className="button-container bg-none position-absolute z-10 w-100 d-flex justify-content-center">
            <Button variant="primary" size="lg" className="mx-3">
              <Link
                to={loggedIn ? "/Training" : "/Login"}
                className="bg-none text-light text-decoration-none">
                {loggedIn ? "View Training" : "Login"}
              </Link>
            </Button>
            {!loggedIn && (
              <Button variant="secondary" size="lg" className="mx-3">
                <Link
                  to="/Register"
                  className="bg-none text-light text-decoration-none">
                  Sign Up
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
      <Features />
    </>
  );
};

export default Home;
