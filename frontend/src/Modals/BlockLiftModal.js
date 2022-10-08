import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { blockLiftsPrompts } from "../Data/data";

const BlockLiftModal = () => {
  const [liftPrompts, setLiftPrompts] = useState(0);
  return (
    <Modal show={true}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">
          {`Pick Your ${blockLiftsPrompts[liftPrompts]} Variation`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form action="" className="bg-white">
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
