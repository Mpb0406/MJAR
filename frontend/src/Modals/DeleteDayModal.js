import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteDay } from "../features/Training/TrainingSlice";

const DeleteDayModal = ({ show, setShow, weekId, dayId }) => {
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const onSubmit = () => {
    dispatch(deleteDay([weekId, dayId]));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg-white" closeButton>
        <Modal.Title className="bg-white">Are You Sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        Are you sure you want to delete this training day? You will lose all
        lifts/sets associated with it?
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

export default DeleteDayModal;
