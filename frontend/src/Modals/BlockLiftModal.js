import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Badge } from "react-bootstrap";
import { blockLiftsPrompts } from "../Data/data.js";
import { useDispatch, useSelector } from "react-redux";
import { addBlockLifts } from "../features/Training/TrainingSlice";

const BlockLiftModal = ({ showLiftPrompt, setShowLiftPrompt }) => {
  const handleClose = () => setShowLiftPrompt(false);
  const dispatch = useDispatch();
  const { blocks } = useSelector((state) => state.training);
  const [blockId, setBlockId] = useState(null);

  useEffect(() => {
    setBlockId(blocks[blocks.length - 1]?._id);
  }, [blocks]);

  const [liftPrompts, setLiftPrompts] = useState(0);
  const [liftsArray, setLiftsArray] = useState({
    lifts: [],
  });
  const [formData, setFormData] = useState({
    liftType: "",
    lift: "",
  });
  const { lift } = formData;
  const { lifts } = liftsArray;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      liftType: blockLiftsPrompts[liftPrompts].lift,
      [e.target.name]: e.target.value,
    }));
  };

  const promptsIdxCheck = liftPrompts + 1 < blockLiftsPrompts.length;

  const onNext = () => {
    setLiftPrompts((prevState) => prevState + 1);
    if (promptsIdxCheck) {
      setFormData((prevState) => ({
        ...prevState,
        liftType: blockLiftsPrompts[liftPrompts + 1].lift,
      }));
      setLiftsArray({ lifts: [...lifts, formData] });
      setFormData((prevState) => ({
        ...prevState,
        lift: "",
      }));
    }
  };
  const onBack = () => {
    setLiftPrompts((prevState) => prevState - 1);
    setLiftsArray({ lifts: lifts.splice(lifts[0], lifts.length - 1) });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlockLifts([blockId, liftsArray]));
    handleClose();
  };

  return (
    <Modal show={showLiftPrompt} onHide={handleClose}>
      <Modal.Header closeButton closeVariant="secondary" className="bg-white">
        <Modal.Title className="bg-white">
          {promptsIdxCheck
            ? `Pick Your ${blockLiftsPrompts[liftPrompts].lift} Variation`
            : "Confirm Lifts?"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-white">
        <form
          action="submit"
          id="lifts"
          className="bg-white"
          onSubmit={(e) => onSubmit(e)}>
          <p className="bg-white mt-2 mx-3 fw-bold fst-italic fs-small">
            {promptsIdxCheck && (
              <Badge bg="secondary" className="me-2">
                i
              </Badge>
            )}
            <div className="bg-none d-flex flex-wrap gap-2">
              {promptsIdxCheck
                ? blockLiftsPrompts[liftPrompts].description
                : liftsArray.lifts.map((lift) => (
                    <div className="bg-none d-flex">
                      <p className="bg-none">{`${lift.liftType}: `}</p>
                      <p className="bg-none text-secondary">{lift.lift}</p>
                    </div>
                  ))}
            </div>
          </p>

          {promptsIdxCheck && (
            <Form.Control
              name="lift"
              value={lift}
              onChange={(e) => onChange(e)}
            />
          )}
        </form>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <Button variant="link" onClick={handleClose}>
          Choose later
        </Button>
        <Button
          variant="info"
          onClick={() => onBack()}
          disabled={liftPrompts <= 0 ? true : false}>
          Back
        </Button>

        {liftPrompts < blockLiftsPrompts.length ? (
          <Button
            variant={promptsIdxCheck ? "primary" : "secondary"}
            onClick={() => onNext()}>
            {promptsIdxCheck ? "Next" : "Confirm"}
          </Button>
        ) : (
          <Button
            variant={promptsIdxCheck ? "primary" : "secondary"}
            type="submit"
            form="lifts">
            Confirm
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default BlockLiftModal;
