import React, { useState, useEffect } from "react";
import { Modal, Form, Badge, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newSet } from "../features/Training/TrainingSlice";

const NewSetModal = ({
  show,
  setShow,
  liftId,
  setLift,
  triggerReload,
  setTriggerReload,
}) => {
  const dispatch = useDispatch();
  const { weekId, dayId } = useParams();

  const handleClose = () => setShow(false);

  const rpeArr = [6, 7, 7.5, 8, 8.5, 9, 9.5, 10];
  const setTypeArr = ["Warm Up", "Top Set", "AMRAP", "Working Set"];

  const [formData, setFormData] = useState({
    weight: "",
    reps: "",
    rpe: "",
    setType: "Warm-Up",
  });
  const { weight, reps, rpe, setType } = formData;

  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newSet([weekId, dayId, liftId, formData]));
    handleClose();
    setTriggerReload(!triggerReload);
  };

  useEffect(() => {
    console.log(liftId);
  }, [liftId]);

  console.log(weekId, dayId);
  console.log(liftId);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Set</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form
          className="bg-white d-flex justify-content-between"
          id="setForm"
          onSubmit={onSubmit}>
          <Form.Control
            className="mx-1 remove-arrows"
            placeholder="Weight"
            name="weight"
            type="number"
            value={weight}
            onChange={onChange}
          />
          <Form.Control
            className="mx-1 remove-arrows"
            placeholder="Reps"
            name="reps"
            type="number"
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
            <option className="bg-white" value={5}>
              {`<6`}
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
            {setTypeArr.map((setType) => (
              <option className="bg-white">{setType}</option>
            ))}
          </Form.Select>
        </form>
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
        <Button variant="primary" type="submit" form="setForm">
          Add Set
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewSetModal;
