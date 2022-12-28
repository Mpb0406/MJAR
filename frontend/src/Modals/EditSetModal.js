import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { editSet } from "../features/Training/TrainingSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const EditSetModal = ({
  show,
  setShow,
  setData,
  set,
  lift,
  triggerReload,
  setTriggerReload,
}) => {
  const rpeArr = [6, 7, 7.5, 8, 8.5, 9, 9.5, 10];
  const setTypeArr = ["Warm Up", "Top Set", "AMRAP", "Working Set"];

  const { weekId, dayId } = useParams();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const { weight, reps, rpe, setType } = formData;

  const handleClose = () => setShow(false);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editSet([weekId, dayId, lift, set, formData]));
    handleClose();
    setTriggerReload(!triggerReload);
  };

  useEffect(() => {
    setFormData({
      weight: setData?.weight,
      reps: setData?.reps,
      rpe: setData?.rpe,
      setType: setData?.setType,
    });
  }, [setData]);

  console.log(set, lift);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Edit Set</Modal.Title>
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
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" form="setForm">
          Update Set
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditSetModal;
