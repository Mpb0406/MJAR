import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";

const Register = () => {
  return (
    <>
      <Form.Group className="d-flex flex-column flex-column align-items-center">
        <h3 className="text-light dis-font fs-1">Create An Account</h3>
        <Form.Control
          className="my-3 w-50 bg-dark"
          placeholder="Name"
          variant="dark"
        />
        <Form.Control
          className="my-3 w-50"
          placeholder="Email"
          variant="dark"
        />
        <Form.Control
          className="my-3 w-50"
          placeholder="Password"
          variant="dark"
        />
        <Form.Control
          className="my-3 w-50"
          placeholder="Confirm Password"
          variant="dark"
        />
        <Button className="btn-dark mt-3">Create Account</Button>
      </Form.Group>
    </>
  );
};

export default Register;
