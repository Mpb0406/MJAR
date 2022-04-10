import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const NewBlockModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({
    block: "Hypertrophy Block",
  });

  const { block } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(formData);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Block</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form className="bg-white">
          <Form.Select name="block" value={block} onChange={onChange}>
            {/* <option className="bg-white">Pick Training Block</option> */}
            <option className="bg-white">Hypertrophy Block</option>
            <option className="bg-white">Strength Block</option>
            <option className="bg-white">Peak Block</option>
          </Form.Select>
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary">Add Block</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewBlockModal;
