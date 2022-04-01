import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/Auth/authSlice";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form onSubmit={onSubmit}>
      <Form.Group className="d-flex flex-column flex-column align-items-center mt-5">
        <h3 className="text-light dis-font fs-1 mb-4">Login</h3>
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
        <Button type="submit" className="btn-primary mt-4 btn-lg">
          Login
        </Button>
      </Form.Group>
    </form>
  );
};

export default Login;
