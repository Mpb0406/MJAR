import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newBlock } from "../features/Training/TrainingSlice";

const NewBlockModal = ({
  showNewBlock,
  setShowNewBlock,
  showLiftPrompt,
  setShowLiftPrompt,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => setShowNewBlock(false);

  const [formData, setFormData] = useState({
    block: "Hypertrophy",
    microBlock: "Block A",
  });

  const { block, microBlock } = formData;

  useEffect(() => {
    if (formData.block === "Peak") {
      setFormData((prevState) => ({
        ...prevState,
        microBlock: null,
      }));
    }
  }, [formData.block]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(newBlock(formData));
    handleClose();
    setShowLiftPrompt(true);
  };

  return (
    <Modal show={showNewBlock} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Block</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form className="bg-white" onSubmit={onSubmit} id="blockForm">
          <Form.Select name="block" value={block} onChange={onChange}>
            <option className="bg-white">Hypertrophy</option>
            <option className="bg-white">Strength</option>
            <option className="bg-white">Peak</option>
          </Form.Select>
          <Badge className="ms-3 mt-2">i</Badge>
          <label className="bg-none mb-3 ms-1 fs-small fw-bold fst-italic">
            Meso Block
          </label>
          {formData.block !== "Peak" && (
            <>
              <Form.Select
                name="microBlock"
                value={microBlock}
                onChange={onChange}>
                <option className="bg-white">Block A</option>
                <option className="bg-white">Block B</option>
              </Form.Select>
              <Badge className="ms-3 mt-2">i</Badge>
              <label className="bg-none mb-2 ms-1 fs-small fw-bold fst-italic">
                Micro Block
              </label>
            </>
          )}
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="info" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type="submit" form="blockForm">
          Add Block
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewBlockModal;
