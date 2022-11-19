import React, { useState } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { blockLiftsPrompts } from "../Data/data";

const BlockLiftModal = ({ showLiftPrompt, setShowLiftPrompt }) => {
  const [liftPrompts, setLiftPrompts] = useState(0);

  const handleClose = () => setShowLiftPrompt(false);
  const onNext = () => {
    setLiftPrompts((prevState) => prevState + 1);
  };
  const onBack = () => {
    setLiftPrompts((prevState) => prevState - 1);
  };

  return (
    <Modal show={showLiftPrompt} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">
          {`Pick Your ${blockLiftsPrompts[liftPrompts].lift} Variation`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form action="" className="bg-white">
          <p className="bg-white mt-2 mx-3 fw-bold fst-italic fs-small">
            <Badge bg="secondary" className="me-2">
              i
            </Badge>
            {blockLiftsPrompts[liftPrompts].description}
          </p>
          <Form.Control />
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="link">Choose later</Button>
        <Button
          variant="info"
          onClick={() => onBack()}
          disabled={liftPrompts <= 0 ? true : false}>
          Back
        </Button>
        <Button variant="primary" onClick={() => onNext()}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BlockLiftModal;
