import React from "react";
import { Table, CloseButton } from "react-bootstrap";

const PreviousDayTable = () => {
  return (
    <Table
      striped
      hover
      variant="dark"
      className="mt-4 mb-3 position-relative"
      responsive="sm">
      <thead>
        <tr className="text-center">
          <th className="fs-5" colSpan={8}>
            Squat
            <CloseButton
              variant="white"
              className="bg-none ms-3 align-self-center"
              id="Squat"
              //   onClick={(e) => handleOpenDeleteLift(e)}
            />
          </th>
        </tr>
        <tr>
          <th>Set</th>
          <th>Weight</th>
          <th>Reps</th>
          <th>RPE</th>
          <th>Type</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
    </Table>
  );
};

export default PreviousDayTable;
