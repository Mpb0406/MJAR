import React, { useState, useEffect } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Button, Tabs, Tab } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getWeightLogs } from "../features/Nutrition/WeightLogSlice";

const WeightLog = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());

  const changeDate = (e) => {
    if (e.target.getAttribute("toggle") === "prev") {
      setDate(new Date(date.setUTCDate(date.getUTCDate() - 1)));
    } else {
      setDate(new Date(date.setUTCDate(date.getUTCDate() + 1)));
    }
  };

  useEffect(() => {
    dispatch(getWeightLogs());
  }, []);

  console.log(date);
  return (
    <div className="mt-5">
      <h1 className="text-light">Weight Log</h1>
      <Tabs defaultActiveKey="day" fill className="w-75 mx-auto my-4">
        <Tab eventKey="day" title="Day"></Tab>
        <Tab eventKey="week" title="Week"></Tab>
        <Tab eventKey="month" title="Month"></Tab>
      </Tabs>
      <div
        id="date-picker"
        className="d-flex align-items-center mb-5 justify-content-center">
        <MdOutlineArrowBackIos
          toggle="prev"
          className="text-light fs-2 cursor-pointer"
          onClick={changeDate}
        />
        <h3 className="text-light mb-0 mx-3">
          {date.toUTCString().slice(0, 16)}
        </h3>
        <MdOutlineArrowForwardIos
          toggle="next"
          className="text-light fs-2 cursor-pointer"
          onClick={changeDate}
        />
      </div>
      <div>
        <h3 className="text-light mb-4">
          You haven't logged a weight yet today.
        </h3>
        <Button variant="secondary">Log Weight</Button>
      </div>
    </div>
  );
};

export default WeightLog;
