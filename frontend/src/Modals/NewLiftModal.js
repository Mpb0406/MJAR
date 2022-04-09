import React, { useRef } from "react";
import {
  Modal,
  Form,
  InputGroup,
  Button,
  Badge,
  FormControl,
} from "react-bootstrap";

const NewLiftModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const inactive = useRef();

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">Add New Lift</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <Form className="bg-white">
          <InputGroup className="mb-3 bg-white">
            <Form.Select ref={inactive} className="bg-white">
              <option className="bg-white">Main Lift</option>
              <option value="1" className="bg-white">
                Squat
              </option>
              <option value="2" className="bg-white">
                Bench Press
              </option>
              <option value="3" className="bg-white">
                Deadlift
              </option>
            </Form.Select>
          </InputGroup>
          <InputGroup className="bg-white">
            <InputGroup.Text>Accessory</InputGroup.Text>
            <FormControl />
          </InputGroup>
        </Form>
        <p
          className="bg-white mt-4 mx-3 fw-bold fst-italic"
          style={{ fontSize: "0.85rem" }}>
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
        <Button variant="primary">Add Lift</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewLiftModal;
