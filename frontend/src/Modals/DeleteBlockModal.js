import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteBlockModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const onSubmit = () => {};
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg-white" closeButton>
        <Modal.Title className="bg-white">Are You Sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        Are you sure you want to delete this training block? You will lose all
        training weeks/days associated with it?
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={onSubmit}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBlockModal;
