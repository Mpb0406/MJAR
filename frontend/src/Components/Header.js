import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
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
            <Nav
              bg-primary
              className="me-auto bg-primary justify-content-end bg-primary">
              <Nav.Link className="bg-primary text-info fs-5" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="bg-primary text-light fs-5" href="#features">
                My Training
              </Nav.Link>
              <div className="profile bg-primary d-flex align-items-center ms-3">
                <div className="profile-pic"></div>
                <div className="profile-name bg-primary text-light ms-2 fw-bold">
                  Mike
                </div>
              </div>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
