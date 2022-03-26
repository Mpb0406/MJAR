import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";

const Register = () => {
  return (
    <>
      <Form.Group className="d-flex flex-column flex-column align-items-center">
        <h3 className="text-light dis-font fs-1 mb-4">Create An Account</h3>
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Name"
          variant="dark"
        />
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Email"
          variant="dark"
        />
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Password"
          variant="dark"
        />
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Confirm Password"
          variant="dark"
        />
        <Button className="btn-primary mt-4 fw-bold">Create Account</Button>
      </Form.Group>
    </>
  );
};

export default Register;
