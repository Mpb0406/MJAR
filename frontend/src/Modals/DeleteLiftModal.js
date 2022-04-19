import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteLift } from "../features/Training/TrainingSlice";

const DeleteLiftModal = ({ show, setShow, weekId, dayId, liftId }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  };

  const liftDelete = () => {
    dispatch(deleteLift([weekId, dayId, liftId]));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-white">
        <Modal.Title className="bg-white">Are you sure, bro?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        Are you sure you want to delete this lift? You will lose all sets within
        this lift and you won't be able to get them back. Ever.
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={liftDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteLiftModal;
