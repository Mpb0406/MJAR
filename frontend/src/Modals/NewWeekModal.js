import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewWeekModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Week</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form className="bg-white">
          <Form.Select>
            <option className="bg-white">Week 1</option>
            <option className="bg-white">Week 2</option>
            <option className="bg-white">Week 3</option>
            <option className="bg-white">Week 4</option>
            <option className="bg-white">Week 5</option>
            <option className="bg-white">Week 6</option>
          </Form.Select>
        </Form>
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

export default NewWeekModal;
