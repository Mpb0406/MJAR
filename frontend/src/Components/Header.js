import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { logout, reset } from "../features/Auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, [user]);

  return (
    <Navbar fixed="top" className="navbar-dark" bg="primary" expand="lg">
      <Container className="bg-primary">
        <Navbar.Brand href="/" className="bg-primary logo text-light fs-4">
          MJAR
        </Navbar.Brand>
        <Navbar.Toggle
          btn-primary
          className="navbar-dark"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="navbar-dark bg-none" id="basic-navbar-nav">
          <Container className="navbar-dark justify-content-end bg-primary">
            {loggedIn ? (
              <Nav
                bg-primary
                className="me-auto bg-primary justify-content-end bg-primary">
                <Nav.Link
                  className={`bg-primary fs-5 ${
                    pathname === "/training" ? "text-light" : "hover-text"
                  }`}
                  href="/training">
                  My Training
                </Nav.Link>
                <Nav.Link
                  onClick={onLogout}
                  className="bg-primary fs-5 hover-text"
                  href="/login">
                  Logout
                </Nav.Link>
                <div className="profile bg-primary d-flex align-items-center ms-3">
                  <div className="profile-pic position-relative">
                    <h5 className="bg-none text-light position-absolute top-50 start-50 translate-50">
                      M
                    </h5>
                  </div>
                  <div className="profile-name bg-primary text-light ms-2 fw-bold">
                    Mike
                  </div>
                </div>
              </Nav>
            ) : (
              <Nav
                bg-primary
                className="me-auto bg-primary justify-content-end bg-primary">
                <Nav.Link
                  className={`bg-primary fs-5 ${
                    pathname === "/register" ? "text-light" : "hover-text"
                  }`}
                  href="/register">
                  Sign Up
                </Nav.Link>
                <Nav.Link
                  className={`bg-primary fs-5 ${
                    pathname === "/login" ? "text-light" : "hover-text"
                  }`}
                  href="/login">
                  Login
                </Nav.Link>
              </Nav>
            )}
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
