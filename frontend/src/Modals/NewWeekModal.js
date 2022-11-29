import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newWeek } from "../features/Training/TrainingSlice";
import { useParams } from "react-router-dom";
import { weekDetails } from "../Data/data";

const NewWeekModal = ({ show, setShow, block }) => {
  const dispatch = useDispatch();
  const { blockId } = useParams();

  const handleClose = () => setShow(false);

  const [selectedWeek, setSelectedWeek] = useState(
    weekDetails.hypertrophyAWeeks
  );
  const [formData, setFormData] = useState({
    week: "Week 1",
    desc: selectedWeek[0],
  });
  const { week } = formData;

  useEffect(() => {
    if (block.block === "Hypertrophy") {
      block.microBlock === "Block A"
        ? setSelectedWeek(weekDetails.hypertrophyAWeeks)
        : setSelectedWeek(weekDetails.hypertrophyBWeeks);
    } else if (block.block === "Strength") {
      block.microBlock === "Block A"
        ? setSelectedWeek(weekDetails.strengthAWeeks)
        : setSelectedWeek(weekDetails.strengthBWeeks);
    }

    setFormData((prevState) => ({
      ...prevState,
      desc: selectedWeek[0],
    }));
  }, [selectedWeek, block.block, block.microBlock]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      desc: selectedWeek.filter((week) => week.week === e.target.value)[0],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newWeek([blockId, formData]));
    handleClose();
  };

  console.log(block.block === "Strength");

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Week</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form className="bg-white" onSubmit={onSubmit} id="weekForm">
          <Form.Select name="week" value={week} onChange={onChange}>
            {selectedWeek.map((week) => (
              <option className="bg-white">{week.week}</option>
            ))}
          </Form.Select>
        </form>
        <p className="bg-white mt-4 mx-3 fs-small fw-bold text-info">
          <Badge bg="secondary" className="me-2">
            i
          </Badge>
          {`Main lift performed to a top set at RPE ${formData.desc.rpe}. Back downs at ${formData.desc.percent}% of top set until RPE ${formData.desc.rpe}. Accessories performed with rep range ${formData.desc.acc}`}
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
