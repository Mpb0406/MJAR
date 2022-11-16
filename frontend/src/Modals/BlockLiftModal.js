import React, { useState } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { blockLiftsPrompts } from "../Data/data";

const BlockLiftModal = ({ showLiftPrompt, setShowLiftPrompt }) => {
  const [liftPrompts, setLiftPrompts] = useState(0);

  const handleClose = () => setShowLiftPrompt(false);
  return (
    <Modal show={showLiftPrompt} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">
          {`Pick Your ${blockLiftsPrompts[liftPrompts].lift} Variation`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form action="" className="bg-white">
          <p
            className="bg-white mt-2 mx-3 fw-bold fst-italic"
            style={{ fontSize: "0.85rem" }}>
            <Badge bg="secondary" className="me-2">
              i
            </Badge>
            {blockLiftsPrompts[liftPrompts].description}
          </p>
          <Form.Control />
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button
          variant="info"
          onClick={() => setLiftPrompts((prevState) => prevState - 1)}>
          Back
        </Button>
        <Button
          variant="primary"
          onClick={() => setLiftPrompts((prevState) => prevState + 1)}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BlockLiftModal;
