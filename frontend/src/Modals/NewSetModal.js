import React, { useState } from "react";
import { Modal, Form, Badge, Button } from "react-bootstrap";

const NewSetModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const rpeArr = ["<6", 6, 7, 7.5, 8, 8.5, 9, 9.5, 10];

  const [formData, setFormData] = useState({
    weight: "",
    reps: "",
    rpe: "",
    setType: "",
  });
  const { weight, reps, rpe, setType } = formData;

  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  console.log(formData);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Set</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form className="bg-white d-flex justify-content-between">
          <Form.Control
            className="mx-1"
            placeholder="Weight"
            name="weight"
            value={weight}
            onChange={onChange}
          />
          <Form.Control
            className="mx-1"
            placeholder="Reps"
            name="reps"
            value={reps}
            onChange={onChange}
          />

          <Form.Select
            className="mx-1"
            name="rpe"
            value={rpe}
            onChange={onChange}>
            <option className="bg-white" value="placeholder">
              RPE
            </option>
            {rpeArr.map((value) => (
              <option className="bg-white" value={value}>
                {value}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            className="mx-1"
            name="setType"
            value={setType}
            onChange={onChange}>
            <option className="bg-white" value="warmUp">
              Warm Up
            </option>
            <option className="bg-white" value="topSet">
              Top Set
            </option>
            <option className="bg-white" value="workSet">
              Working Set
            </option>
          </Form.Select>
        </Form>
        <p
          className="bg-white mt-4 mx-3 fw-bold fst-italic"
          style={{ fontSize: "0.85rem" }}>
          <Badge bg="secondary" className="me-2">
            i
          </Badge>
          Core lifts are performed to a top set at RPE 8 with working sets at
          80% of the top set.
        </p>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary">Add Lift</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewSetModal;
