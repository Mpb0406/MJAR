import React, { useState } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newWeek } from "../features/Training/TrainingSlice";
import { useParams } from "react-router-dom";
import { hypertrophyAWeeks } from "../Data/data";

const NewWeekModal = ({ show, setShow, block }) => {
  const dispatch = useDispatch();
  const { blockId } = useParams();

  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({
    week: hypertrophyAWeeks[0],
    desc: null,
  });
  const { week, desc } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      desc: hypertrophyAWeeks.filter((week) => week.week === e.target.value),
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newWeek([blockId, formData]));
    handleClose();
  };

  console.log(formData.desc);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Week</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form className="bg-white" onSubmit={onSubmit} id="weekForm">
          <Form.Select name="week" value={week} onChange={onChange}>
            {hypertrophyAWeeks.map((week) => (
              <option className="bg-white">{week.week}</option>
            ))}
          </Form.Select>
        </form>
        <p className="bg-white mt-4 mx-3 fs-small fw-bold text-info">
          <Badge bg="secondary" className="me-2">
            i
          </Badge>
          {block.block === "Hypertrophy Block"
            ? `Core lifts are performed to a top set at RPE ${
                desc ? desc[0].rpe : 6
              } with working sets at
          ${
            desc ? desc[0].percent : 75
          }% of the top set. Accessories will have a rep range of ${
                desc ? desc[0].acc : "12-15"
              }`
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
