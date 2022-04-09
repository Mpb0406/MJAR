import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TrainingDay = () => {
  const [showLift, setShowLift] = useState(false);
  const [showSet, setShowSet] = useState(false);

  const handleOpenLift = () => setShowLift(true);
  const handleOpenSet = () => setShowSet(true);

  const { dayId } = useParams();
  const { days } = useSelector((state) => state.training);
  const day = days.filter((day) => day._id === dayId)[0];

  console.log(day);

  return (
    <div className="mt-5 text-light">
      <h1 className="pb-1">Training Day</h1>

      {day.lifts.map((lift) => (
        <Table
          striped
          bordered
          hover
          variant="dark"
          className="mt-4 position-relative"
          responsive="sm">
          <thead>
            <tr className="text-center">
              <th colSpan={5}>{lift.exercise}</th>
            </tr>
            <tr>
              <th>Set</th>
              <th>Weight</th>
              <th>Reps</th>
              <th>RPE</th>
              <th>Set-Type</th>
            </tr>
          </thead>
          <tbody>
            {lift.sets.map((set, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{set.weight}</td>
                <td>{set.reps}</td>
                <td>{set.rpe}</td>
                <td>{set.setType}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}

      <div className="d-grid w-75 m-auto gap-3 px-2 pt-2">
        <Button variant="secondary" onClick={handleOpenSet}>
          New Set
        </Button>
        <Button variant="primary" onClick={handleOpenLift}>
          Add Lift
        </Button>
      </div>

      <NewLiftModal show={showLift} setShow={setShowLift} />

      <NewSetModal show={showSet} setShow={setShowSet} />
    </div>
  );
};

export default TrainingDay;
