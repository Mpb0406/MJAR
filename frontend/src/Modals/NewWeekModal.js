import React, { useState } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newWeek } from "../features/Training/TrainingSlice";
import { useParams } from "react-router-dom";

const NewWeekModal = ({ show, setShow, block }) => {
  const dispatch = useDispatch();
  const { blockId } = useParams();

  const handleClose = () => setShow(false);

  const weeks = [
    { week: "Week 1", rpe: 6, acc: "12-15" },
    { week: "Week 2", rpe: 7, acc: "12-15" },
    { week: "Week 3", rpe: 8, acc: "10-12" },
    { week: "Week 4", rpe: 9, acc: "10-12" },
    { week: "Deload", rpe: 7, acc: "12-15" },
  ];

  const [formData, setFormData] = useState({
    week: weeks[0],
    desc: "",
  });
  const { week, desc } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      desc: weeks.filter((week) => week.week === e.target.value),
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
              <option className="bg-white">{week.week}</option>
            ))}
          </Form.Select>
        </form>
        <p className="bg-white mt-4 mx-3 fs-small fw-bold text-info">
          <Badge bg="secondary" className="me-2">
            i
          </Badge>
          {block.block === "Hypertrophy Block"
            ? `Core lifts are performed to a top set at RPE ${desc[0].rpe} with working sets at
          75% of the top set. Accessories will have a rep range of ${desc[0].acc}`
            : `Strength`}
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
