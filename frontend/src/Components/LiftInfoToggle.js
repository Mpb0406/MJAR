import React from "react";
import { useAccordionButton } from "react-bootstrap";

const LiftInfoToggle = ({ children, eventKey }) => {
  const toggleLiftInfo = useAccordionButton(eventKey);

  return (
    <button
      className="bg-none border-0 text-light fw-bold fs-4 w-100 p-1"
      type="button"
      onClick={toggleLiftInfo}>
      {children}
    </button>
  );
};

export default LiftInfoToggle;
