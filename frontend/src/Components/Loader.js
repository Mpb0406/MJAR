import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center ">
      <Spinner animation="border" variant="light" />
    </div>
  );
};

export default Loader;
