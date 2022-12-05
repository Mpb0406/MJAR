import React, { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SummaryAccordion from "../Components/SummaryAccordion";

const TrainingDayOverview = () => {
  const { days } = useSelector((state) => state.training);
  const { dayId } = useParams();
  const trainingDay = days.filter((day) => day._id === dayId)[0];
  console.log(trainingDay);
  return (
    <div className="mt-5">
      <h1 className="text-light">Training Day Overview</h1>
      <h3 className="fst-italic fw-lighter text-light fs-4">
        Saturday, Dec 2, 2022
      </h3>
      <Tabs className="mt-4 w-75 m-auto" fill justify>
        <Tab eventKey="summary" title="Summary">
          <SummaryAccordion trainingDay={trainingDay} />
        </Tab>
        <Tab eventKey="volume" title="Volume">
          Volume
        </Tab>
      </Tabs>
    </div>
  );
};

export default TrainingDayOverview;
