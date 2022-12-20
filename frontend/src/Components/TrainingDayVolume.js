import React, { useState } from "react";
import { Form, Badge, Tooltip, OverlayTrigger } from "react-bootstrap";

const TrainingDayVolume = ({ trainingDay }) => {
  // Set Current Lift
  const [selectedLift, setSelectedLift] = useState(
    trainingDay.lifts[0].exercise
  );

  const changeLift = (e) => {
    setSelectedLift(e.target.value);
  };

  const liftVolume = trainingDay.lifts
    .filter((lift) => lift.exercise === selectedLift)[0]
    .sets.filter((set) => set.setType !== "Warm-Up")
    .reduce((acc, obj) => {
      return obj.weight * obj.reps + acc;
    }, 0);

  const topSet =
    trainingDay.lifts
      .filter((lift) => lift.exercise === selectedLift)[0]
      .sets.filter((set) => set.setType === "Top Set")[0] ||
    trainingDay.lifts.filter((lift) => lift.exercise === selectedLift)[0]
      .sets[0];

  //   ||
  // trainingDay.lifts
  //   .filter((lift) => lift.exercise === selectedLift)[0]
  //   .sets.sort((a, b) => {
  //     a.weight * a.reps - b.weight * b.reps;
  //   })[0]

  //   const accessoryTopSet = trainingDay.lifts
  //     .filter((lift) => lift.exercise === "Pulldown")[0]
  //     .sets.sort((a, b) => b.weight - a.weight);

  //   console.log(accessoryTopSet);

  const bestVolumeTooltip = (props) => (
    <Tooltip placement="left-end" id="bestVolume-tooltip" {...props}>
      Tue, May 22, 2022
    </Tooltip>
  );
  const currentRMTooltip = (props) => (
    <Tooltip placement="left-end" id="bestVolume-tooltip" {...props}>
      Sat, May 26, 2022
    </Tooltip>
  );
  return (
    <div>
      <Form.Select
        value={selectedLift}
        name="lift"
        onChange={(e) => changeLift(e)}
        className="w-50 mx-auto bg-none mt-4">
        {trainingDay.lifts.map((lift) => (
          <option className="bg-none" value={lift.exercise}>
            {lift.exercise}
          </option>
        ))}
      </Form.Select>

      {/* Stats Container */}
      <div className="bg-none mt-4 d-flex flex-column">
        <div className="bg-none d-flex justify-content-around gap-1 border-bottom border-white">
          <div className="d-flex flex-column align-items-center">
            <p className="text-light mb-1 fs-small fw-bold">{`Total ${selectedLift} Volume`}</p>
            <h3 className="text-light">{liftVolume} lbs</h3>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="text-light mb-1 fs-small fw-bold">
              {`Best ${selectedLift} Volume`}
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={bestVolumeTooltip}>
                <Badge bg="secondary" className="ms-2">
                  i
                </Badge>
              </OverlayTrigger>
            </p>
            <h3 className="text-light">16,450 lbs</h3>
          </div>
        </div>
        <div className="bg-none d-flex justify-content-around gap-1 mt-3">
          <div className="d-flex flex-column align-items-center">
            <p className="text-light mb-1 fs-small fw-bold">Top Set</p>
            <h3 className="text-light">
              {topSet.weight}×{topSet.reps} @{topSet.rpe}
            </h3>
          </div>
          <div className="d-flex flex-column align-items-center">
            <p className="text-light mb-1 fs-small fw-bold">
              {`Current ${topSet.reps}RM`}
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={currentRMTooltip}>
                <Badge bg="secondary" className="ms-2">
                  i
                </Badge>
              </OverlayTrigger>
            </p>
            <h3 className="text-light">16,450 lbs</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDayVolume;
