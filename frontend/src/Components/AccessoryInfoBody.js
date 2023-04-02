import React from "react";
import { Card } from "react-bootstrap";
import { weekDetails } from "../Data/data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const AccessoryInfoBody = () => {
  const { blockId, weekId } = useParams();
  const { blocks, weeks } = useSelector((state) => state.training);
  // Get Block and Week
  let block;
  if (blocks.filter((block) => block._id === blockId)[0].microBlock) {
    block =
      blocks.filter((block) => block._id === blockId)[0].block +
      blocks.filter((block) => block._id === blockId)[0]?.microBlock?.slice(6);
  } else {
    block = blocks.filter((block) => block._id === blockId)[0].block;
  }

  const week = weeks.filter((week) => week._id === weekId)[0].week;
  // Get Week from data.js
  const getWeek = weekDetails[block].weeks.filter(
    (item) => item.week === week
  )[0];

  return (
    <Card.Body className="bg-input">
      <p className="bg-input fw-bold fs-small text-center p-3 mb-0">
        {`3 sets at ${getWeek.acc} reps. Aim for 3 sets of ${
          getWeek.acc.split("-")[1]
        }. If you can complete 3x${getWeek.acc.split("-")[1]}
        then add weight.`}
      </p>
    </Card.Body>
  );
};

export default AccessoryInfoBody;
