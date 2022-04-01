import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, [user]);

  return (
    <Navbar className="navbar-dark" bg="primary" expand="lg">
      <Container className="bg-primary">
        <Navbar.Brand href="/" className="bg-primary logo text-light fs-4">
          MJAR
        </Navbar.Brand>
        <Navbar.Toggle
          btn-primary
          className="navbar-dark"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="navbar-dark" id="basic-navbar-nav">
          <Container className="navbar-dark justify-content-end bg-primary">
            {loggedIn ? (
              <Nav
                bg-primary
                className="me-auto bg-primary justify-content-end bg-primary">
                <Nav.Link
                  className="bg-primary text-info fs-5"
                  href="/register">
                  My Training
                </Nav.Link>
                <Nav.Link
                  onClick={onLogout}
                  className="bg-primary text-light fs-5"
                  href="/login">
                  Logout
                </Nav.Link>
                <div className="profile bg-primary d-flex align-items-center ms-3">
                  <div className="profile-pic"></div>
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
                  className="bg-primary text-info fs-5"
                  href="/register">
                  Sign Up
                </Nav.Link>
                <Nav.Link className="bg-primary text-light fs-5" href="/login">
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
