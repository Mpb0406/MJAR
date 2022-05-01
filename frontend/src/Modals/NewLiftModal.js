import React, { useState } from "react";
import {
  Modal,
  Form,
  InputGroup,
  Button,
  Badge,
  FormControl,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newLift } from "../features/Training/TrainingSlice";

const NewLiftModal = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const { weekId, dayId } = useParams();

  const handleClose = () => setShow(false);

  const lifts = ["Main Lift", "Squat", "Bench Press", "Deadlift"];

  const [formData, setFormData] = useState({
    exercise: "",
  });
  const { exercise } = formData;

  const onChange = (e) => {
    if (e.target.name === "mainLift") {
      setFormData((prevState) => ({
        ...prevState,
        exercise: e.target.value,
      }));
    }

    if (e.target.name === "accessory") {
      setFormData((prevState) => ({
        ...prevState,
        exercise: e.target.value,
      }));
    }
  };

  console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newLift([weekId, dayId, formData]));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Lift</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form className="bg-white" id="liftForm" onSubmit={onSubmit}>
          <InputGroup className="mb-3 bg-white">
            <Form.Select
              className="bg-white"
              name="mainLift"
              value={exercise}
              onChange={onChange}>
              {lifts.map((lift) => (
                <option value={lift} className="bg-white">
                  {lift}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
          <InputGroup className="bg-white">
            <InputGroup.Text>Accessory</InputGroup.Text>
            <FormControl
              name="accessory"
              value={exercise}
              onChange={onChange}
            />
          </InputGroup>
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
        <Button variant="primary" type="submit" form="liftForm">
          Add Lift
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewLiftModal;
