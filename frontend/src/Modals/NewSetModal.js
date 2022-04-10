import React from "react";
import { Modal, Form, Badge, Button } from "react-bootstrap";

const NewSetModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const rpe = ["<6", 6, 7, 7.5, 8, 8.5, 9, 9.5, 10];

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Set</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form className="bg-white d-flex justify-content-between">
          <Form.Control className="mx-1" placeholder="Weight" />
          <Form.Control className="mx-1" placeholder="Reps" />

          <Form.Select className="mx-1">
            <option className="bg-white" value="placeholder">
              RPE
            </option>
            {rpe.map((x) => (
              <option className="bg-white" value={x}>
                {x}
              </option>
            ))}
          </Form.Select>
          <Form.Select className="mx-1">
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
