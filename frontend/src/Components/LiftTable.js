import React from "react";
import { Table, CloseButton, Button } from "react-bootstrap";
import { useStateContext } from "../features/Context/TrainingContext";

const LiftTable = ({ lift }) => {
  const { handleOpenDeleteLift, handleOpenDeleteSet, handleOpenSet } =
    useStateContext();
  return (
    <>
      <Table
        striped
        bordered
        hover
        variant="dark"
        className="mt-5 mb-3 position-relative"
        responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="fs-5" colSpan={6}>
              {lift.exercise}
              <CloseButton
                variant="white"
                className="bg-none ms-3 align-self-center"
                id={lift._id}
                onClick={(e) => handleOpenDeleteLift(e)}
              />
            </th>
          </tr>
          <tr>
            <th>Set</th>
            <th>Weight</th>
            <th>Reps</th>
            <th>RPE</th>
            <th>Type</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {lift.sets.map((set, idx) => (
            <tr style={{ cursor: "pointer" }}>
              <td>{idx + 1}</td>
              <td>{set.weight}</td>
              <td>{set.reps}</td>
              <td>{set.rpe === 5 ? "<6" : set.rpe}</td>
              <td>{set.setType}</td>
              <td>
                {
                  <p
                    className="bg-none mb-0 delete-set"
                    name={lift._id}
                    id={set._id}
                    onClick={(e) => handleOpenDeleteSet(e)}>
                    Delete
                  </p>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-grid w-75 m-auto gap-3 px-2 py-2">
        <Button
          variant="secondary"
          className="mb-3"
          id={lift._id}
          onClick={(e) => handleOpenSet(e)}>
          New Set
        </Button>
      </div>
    </>
  );
};

export default LiftTable;
