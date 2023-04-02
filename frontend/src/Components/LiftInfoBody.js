import React from "react";
import { Card } from "react-bootstrap";
import { weekDetails } from "../Data/data";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const LiftInfoBody = ({ mainLiftType }) => {
  const { blockId, weekId, dayId } = useParams();
  const { blocks, weeks, days } = useSelector((state) => state.training);

  // Get Block, Week, Day
  let block;
  if (blocks.filter((block) => block._id === blockId)[0].microBlock) {
    block =
      blocks.filter((block) => block._id === blockId)[0].block +
      blocks.filter((block) => block._id === blockId)[0]?.microBlock?.slice(6);
  } else {
    block = blocks.filter((block) => block._id === blockId)[0].block;
  }

  const week = weeks.filter((week) => week._id === weekId)[0].week;
  const day = days.filter((day) => day._id === dayId)[0].day.slice(0, 5);

  console.log(block);
  // Get Reps and Week from weekDetails for Prompts
  const getReps = weekDetails[block].reps[mainLiftType][day];
  const getWeek = weekDetails[block].weeks.filter(
    (item) => item.week === week
  )[0];

  return (
    <Card.Body className="bg-input w-auto p-0">
      <div className="bg-none d-flex justify-content-around mt-3">
        <div className="bg-none">
          <h4 className="bg-none fs-small text-center">Top Set</h4>
          <div className="underline"></div>
          <p className="text-center mt-2 bg-none fs-6 fw-bold">
            {getReps} reps @{getWeek.rpe}
          </p>
        </div>
        <div className="bg-none">
          <h4 className="bg-none fs-small text-center">Working Sets</h4>
          <div className="underline"></div>
          <p className="text-center mt-2 bg-none fs-6 fw-bold">
            {getWeek.percent}% of Top Set
          </p>
        </div>
      </div>
      <div className="bg-none text-center mt-3">
        <p className="bg-none px-4 py-2 fs-small fw-bold">
          {block !== "Peak"
            ? `Complete working sets at ${getReps} reps until you reach RPE ${getWeek.rpe}. If you reach 5
          sets then complete an AMRAP to RPE ${getWeek.rpe}`
            : `Complete working sets at ${getReps} reps until you reach RPE ${getWeek.rpe}. Stop at 3 sets. No AMRAP.`}
        </p>
      </div>
    </Card.Body>
  );
};

export default LiftInfoBody;
