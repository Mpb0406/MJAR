import React, { useState } from "react";
import { Modal, Button, Badge, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { newDay } from "../features/Training/TrainingSlice";

const NewDayModal = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const { weekId } = useParams();

  const handleClose = () => setShow(false);

  const days = [
    "Day 1 - Squats & Bench",
    "Day 2 - Bro Chest",
    "Day 3 - Deadlifts & Legs",
    "Day 4 - Squats & Bench",
    "Day 5 - Deadlifts & Back",
  ];

  const [formData, setFormData] = useState({
    day: "Day 1 - Squats & Bench",
  });
  const { day } = formData;

  const onChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newDay([weekId, formData]));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Training Day</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form className="bg-white" id="dayForm" onSubmit={onSubmit}>
          <Form.Select name="day" value={day} onChange={onChange}>
            {days.map((day) => (
              <option className="bg-white">{day}</option>
            ))}
          </Form.Select>
        </form>
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
        <Button variant="primary" type="submit" form="dayForm">
          Add Day
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewDayModal;
