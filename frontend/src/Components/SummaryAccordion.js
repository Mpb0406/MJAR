import React from "react";
import { Accordion } from "react-bootstrap";

const SummaryAccordion = ({ lifts, trainingDay }) => {
  const coreLifts = lifts.filter(
    (lift) =>
      lift.exercise === "Squat" ||
      lift.exercise === "Bench" ||
      lift.exercise === "Deadlift"
  );
  const accessories = lifts.filter(
    (lift) =>
      lift.exercise !== "Squat" &&
      lift.exercise !== "Bench" &&
      lift.exercise !== "Deadlift"
  );

  return (
    <div>
      <Accordion className="mt-4" defaultActiveKey="0" alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-info">Core Lifts</Accordion.Header>
          <Accordion.Body className="bg-info text-light pb-2">
            {coreLifts.map((lift) => (
              <div className="bg-none d-flex justify-content-around">
                <p className="bg-none mx-2 fw-bold fs-5 mb-3">
                  {lift.exercise}
                </p>
                <div className="bg-none d-flex flex-column mx-2 mb-4">
                  {lift.sets
                    .filter((set) => set.setType !== "Warm-Up")
                    .map((set) => (
                      <p className="bg-none my-1">
                        {set.weight} × {set.reps} @{set.rpe}
                      </p>
                    ))}
                </div>
                <div className="bg-none d-flex flex-column mb-4">
                  {lift.sets
                    .filter((set) => set.setType !== "Warm-Up")
                    .map((set) => (
                      <p className="bg-none my-1 fst-italic">{set.setType}</p>
                    ))}
                </div>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="bg-info">Accessories</Accordion.Header>
          <Accordion.Body className="bg-info text-light">
            <div className="bg-none d-flex flex-wrap justify-content-between">
              {accessories.map((lift) => (
                <div className="bg-none d-flex flex-column align-items-center w-50 mb-3">
                  <p className="bg-none mx-1 fw-bold mb-2">{lift.exercise}</p>
                  {lift.sets.map((set) => (
                    <p className="bg-none my-1">
                      {set.weight} × {set.reps}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default SummaryAccordion;
