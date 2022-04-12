import React, { useState } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newWeek } from "../features/Training/TrainingSlice";
import { useParams } from "react-router-dom";

const NewWeekModal = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const { blockId } = useParams();

  const handleClose = () => setShow(false);

  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"];

  const [formData, setFormData] = useState({
    week: "Week 1",
  });
  const { week } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newWeek([blockId, formData]));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Week</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form className="bg-white" onSubmit={onSubmit} id="weekForm">
          <Form.Select name="week" value={week} onChange={onChange}>
            {weeks.map((week) => (
              <option className="bg-white">{week}</option>
            ))}
          </Form.Select>
        </form>
        <p
          className="bg-white mt-4 mx-3  fw-bold text-info"
          style={{ fontSize: "0.75rem" }}>
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
        <Button variant="primary" type="submit" form="weekForm">
          Add Week
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewWeekModal;
