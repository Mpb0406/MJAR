import React from "react";
import { Modal, Button, Badge, Form } from "react-bootstrap";

const NewDayModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Training Day</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form className="bg-white">
          <Form.Select>
            <option className="bg-white">Day 1 - Squats & Bench</option>
            <option className="bg-white">Day 2 - Bro Chest</option>
            <option className="bg-white">Day 3 - Deadlifts & Legs</option>
            <option className="bg-white">Day 4 - Squats & Bench</option>
            <option className="bg-white">Day 5 - Deadlifts & Back</option>
          </Form.Select>
        </Form>
        <p
          className="bg-white mt-4 mx-3 fw-bold fst-italic"
          style={{ fontSize: "0.85rem" }}>
          <Badge bg="secondary" className="me-2">
            i
          </Badge>
          Squats x 7, Bench x 5, Upper Body Accessories
        </p>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary">Add Week</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewDayModal;
