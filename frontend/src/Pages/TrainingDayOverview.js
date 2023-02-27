import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import SummaryAccordion from "../Components/SummaryAccordion";
import TrainingDayVolume from "../Components/TrainingDayVolume";

const TrainingDayOverview = () => {
  const navigate = useNavigate();
  const { days } = useSelector((state) => state.training);
  const { blockId, weekId, dayId } = useParams();
  const trainingDay = days.filter((day) => day._id === dayId)[0];

  const liftsWithSets = trainingDay.lifts.filter(
    (lift) => lift.sets.length >= 1
  );

  return (
    <div className="mt-5">
      <button
        className="fw-bold text-secondary text-decoration-none border-0"
        onClick={() => navigate(-1)}>
        {`‹ Back To Training`}
      </button>
      <h1 className="text-light mt-3">Training Day Overview</h1>
      <h3 className="fst-italic fw-lighter text-light fs-4">
        Saturday, Dec 2, 2022
      </h3>

      <Tabs className="mt-4 w-75 m-auto" fill justify>
        <Tab eventKey="summary" title="Summary">
          <SummaryAccordion lifts={liftsWithSets} trainingDay={trainingDay} />
        </Tab>
        <Tab eventKey="volume" title="Volume">
          <TrainingDayVolume lifts={liftsWithSets} trainingDay={trainingDay} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TrainingDayOverview;
