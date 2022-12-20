import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteSet } from "../features/Training/TrainingSlice";

const DeleteSetModal = ({
  show,
  setShow,
  liftId,
  setId,
  dayId,
  weekId,
  triggerReload,
  setTriggerReload,
}) => {
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();

  const setDelete = () => {
    dispatch(deleteSet([weekId, dayId, liftId, setId]));
    handleClose();
    setTriggerReload(!triggerReload);
    // console.log(setId);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg-white" closeButton closeVariant="secondary">
        <Modal.Title className="bg-white">Are You Sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        Bro, are you sure you want to delete this set? <br />
        You will not be able to get this back.
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="secondary" onClick={setDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteSetModal;
