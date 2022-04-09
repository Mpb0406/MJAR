import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";

const TrainingDay = () => {
  const [showLift, setShowLift] = useState(false);
  const [showSet, setShowSet] = useState(false);

  const handleOpenLift = () => setShowLift(true);
  const handleOpenSet = () => setShowSet(true);

  return (
    <div className="mt-5 text-light">
      <h1 className="pb-1">Training Day</h1>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="mt-4 position-relative"
        responsive="sm">
        <thead>
          <tr className="text-center">
            <th colSpan={5}>Squats</th>
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
          <tr>
            <td>1</td>
            <td>135</td>
            <td>5</td>
            <td>6</td>
            <td>Warm-Up</td>
          </tr>
          <tr>
            <td>2</td>
            <td>185</td>
            <td>5</td>
            <td>6</td>
            <td>Warm-Up</td>
          </tr>
          <tr>
            <td>3</td>
            <td>225</td>
            <td>5</td>
            <td>6</td>
            <td>Warm-Up</td>
          </tr>
        </tbody>
      </Table>
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
