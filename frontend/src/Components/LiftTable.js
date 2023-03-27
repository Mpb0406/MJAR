import React from "react";
import { Table, CloseButton, Button, Badge } from "react-bootstrap";
import { useStateContext } from "../features/Context/TrainingContext";
import { setTypeClass } from "../Data/data";
import { MdDelete } from "react-icons/md";

const LiftTable = ({ lift }) => {
  const { handleOpenDeleteLift, handleOpenDeleteSet, handleOpenSet } =
    useStateContext();
  return (
    <>
      <Table
        striped
        hover
        variant="dark"
        className="mt-5 mb-3 position-relative"
        responsive="sm">
        <thead>
          <tr className="text-center">
            <th className="fs-5" colSpan={6}>
              <p className="d-inline-block bg-none mb-0 align-middle">
                {lift.exercise}
              </p>
              <CloseButton
                variant="white"
                className="bg-none ms-3 mt-1 d-inline-block align-middle align-self-center"
                id={lift._id}
                onClick={(e) => handleOpenDeleteLift(e)}
              />
            </th>
          </tr>
          <tr>
            <th className="text-center">#</th>
            <th className="text-center">Set</th>
            <th className="text-center">RPE</th>
            <th className="text-center">Type</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {lift.sets.map((set, idx) => (
            <tr style={{ cursor: "pointer" }}>
              <td className="fw-bold text-center">{idx + 1}</td>
              <td className="text-center">{`${set.weight} × ${set.reps}`}</td>
              <td className="text-center">{set.rpe === 5 ? "<6" : set.rpe}</td>
              <td className="text-center">
                <Badge
                  className="shadow-lg set-badge"
                  bg={setTypeClass(set.setType)}>
                  {set.setType}
                </Badge>
              </td>
              <td className="text-center">
                {
                  <p
                    className="bg-none mb-0"
                    name={lift._id}
                    id={set._id}
                    onClick={(e) => handleOpenDeleteSet(e)}>
                    <MdDelete className="bg-none text-secondary fs-2 pe-none" />
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
