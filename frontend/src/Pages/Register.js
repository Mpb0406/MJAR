import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Form.Group className="d-flex flex-column flex-column align-items-center mt-5">
        <h3 className="text-light dis-font fs-1 mb-4">Create An Account</h3>
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Name"
          variant="dark"
          name="name"
          value={name}
          onChange={onChange}
        />
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Email"
          variant="dark"
          type="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Password"
          variant="dark"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Form.Control
          className="my-3 bg-input text-light fw-bold input-width border-primary border-2"
          placeholder="Confirm Password"
          variant="dark"
          type="password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        <Button className="btn-primary mt-4 btn-lg">Create Account</Button>
      </Form.Group>
    </>
  );
};

export default Register;
