import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { logWeight } from "../features/Nutrition/WeightLogSlice";
import { useDispatch } from "react-redux";

const LogWeightModal = ({ show, setShow, setLoggedToday }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    weight: "",
    unit: "lb",
    notes: "",
  });
  const { weight, unit, notes } = formData;

  const handleClose = () => setShow(false);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(logWeight(formData));
    setLoggedToday(true);
    handleClose();
  };

  // console.log(formData);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg-white" closeButton>
        <Modal.Title className="bg-none">Log Today's Weight</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form
          className="bg-none"
          action="submit"
          id="weightForm"
          onSubmit={onSubmit}>
          <div className="d-flex gap-2 bg-none">
            <Form.Group className="d-flex align-items-center bg-none">
              <Form.Label className="bg-none me-2 fw-bold mb-0">
                Bodyweight:
              </Form.Label>
              <Form.Control
                name="weight"
                value={weight}
                onChange={onChange}
                className="w-75"
              />
            </Form.Group>
            <Form.Select
              name="unit"
              value={unit}
              onChange={onChange}
              className="w-25">
              <option className="bg-none" value="lb">
                lb
              </option>
              <option className="bg-none" value="kg">
                kg
              </option>
            </Form.Select>
          </div>
          <Form.Group className="bg-none d-flex my-4 justify-content-center">
            <Form.Label className="bg-none me-2 fw-bold">Notes: </Form.Label>
            <Form.Control
              name="notes"
              value={notes}
              onChange={onChange}
              className="w-75 "
              as="textarea"
            />
          </Form.Group>
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button onClick={handleClose} variant="info">
          Close
        </Button>
        <Button variant="primary" form="weightForm" type="submit">
          Log Weight
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LogWeightModal;
