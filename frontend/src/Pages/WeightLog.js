import React, { useState, useEffect } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Button, Tabs, Tab, Table, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Moment from "react-moment";
import Loader from "../Components/Loader";
import LogWeightModal from "../Modals/LogWeightModal";
import { useDispatch } from "react-redux";
import { getWeightLogs } from "../features/Nutrition/WeightLogSlice";

const WeightLog = () => {
  const { dailyWeight, isLoading } = useSelector((state) => state.weightLog);
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [showLogWeight, setShowLogWeight] = useState(false);
  const [loggedToday, setLoggedToday] = useState(false);

  const changeDate = (e) => {
    if (e.target.getAttribute("toggle") === "prev") {
      setDate(new Date(date.setUTCDate(date.getUTCDate() - 1)));
    } else {
      setDate(new Date(date.setUTCDate(date.getUTCDate() + 1)));
    }
  };

  const handleOpen = () => setShowLogWeight(true);

  const currentWeek = () => {
    const lastSeven = dailyWeight.slice(dailyWeight.length - 7);
    let modifiedWeek = [];

    // Loop through last 7 days of bodyweight logs to return current week starting from Sunday
    for (let i = 0; i < lastSeven.length; i++) {
      if (new Date(lastSeven[i].createdAt).getDay() === 0) {
        modifiedWeek.push(lastSeven.slice(i));
      }
    }
    return modifiedWeek[0];
  };

  const prevWeek = () => {
    const lastFourteen = dailyWeight.slice(dailyWeight.length - 14);
    let modifiedWeek = [];

    for (let i = 0; i < lastFourteen.length; i++) {
      if (new Date(lastFourteen[i].createdAt).getDay() === 0) {
        modifiedWeek.push(lastFourteen.slice(i));
      }
    }

    return modifiedWeek[0].slice(0, 7);
  };

  const weekAvg =
    Math.round(
      (currentWeek()
        .map((week) => week.bodyWeight.weight)
        .reduce((a, b) => a + b) /
        currentWeek().length +
        Number.EPSILON) *
        100
    ) / 100;

  const prevWeekAvg =
    Math.round(
      (prevWeek()
        .map((week) => week.bodyWeight.weight)
        .reduce((a, b) => a + b) /
        prevWeek().length +
        Number.EPSILON) *
        100
    ) / 100;

  useEffect(() => {
    dispatch(getWeightLogs());

    if (
      new Date(dailyWeight[dailyWeight.length - 1].createdAt)
        .toUTCString()
        .slice(0, 16) == new Date().toUTCString().slice(0, 16)
    ) {
      setLoggedToday(true);
    }
  }, [dispatch]);

  console.log(
    new Date(dailyWeight[dailyWeight.length - 1].createdAt)
      .toUTCString()
      .slice(0, 16)
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-5">
      <h1 className="text-light">Weight Log</h1>
      <Tabs defaultActiveKey="day" fill className="w-75 mx-auto my-4">
        <Tab eventKey="day" title="Day">
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
          {loggedToday && (
            <div className="text-center">
              <Card className="w-50 border-0 rounded mx-auto my-4">
                <Card.Body className="bg-info p-2">
                  <div className="bg-none mx-auto d-flex flex-column align-items-center">
                    <p className="bg-none text-light mb-1">Today's Weight</p>
                    <h3 className="bg-none text-light fw-bold fs-2 mb-0">
                      {dailyWeight[dailyWeight.length - 1].bodyWeight.weight}
                    </h3>
                    <p className="bg-none text-light fs-small fw-bold mb-1">
                      Good job
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          )}
        </Tab>
        <Tab eventKey="week" title="Week">
          <Card className="w-50 border-0 rounded mx-auto my-4">
            <Card.Body className="bg-info p-2">
              <div className="bg-none mx-auto d-flex flex-column align-items-center">
                <p className="bg-none text-light mb-1">Weekly Avg</p>
                <h3 className="bg-none text-light fw-bold fs-2 mb-0">
                  {weekAvg}
                </h3>
                <p className="bg-none text-light fs-small fw-bold mb-1">
                  <span
                    className={`bg-none ${
                      weekAvg - prevWeekAvg >= 0
                        ? "text-success"
                        : "text-danger"
                    } fs-5 fw-bold me-1`}>
                    {weekAvg - prevWeekAvg >= 0 ? "+" : ""}
                    {Math.round(
                      (weekAvg - prevWeekAvg + Number.EPSILON) * 100
                    ) / 100}
                  </span>{" "}
                  vs. last week
                </p>
              </div>
            </Card.Body>
          </Card>
          <Table variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {currentWeek().map((weight) => (
                <tr>
                  <td>
                    <Moment className="bg-none" format="MM/DD/YY">
                      {weight.createdAt}
                    </Moment>
                  </td>

                  <td>
                    {weight.bodyWeight.weight}
                    {` ${weight.bodyWeight.unit}`}
                  </td>
                  <td>{weight.notes}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="all-time" title="All-Time">
          <Table variant="dark">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {dailyWeight.map((weight) => (
                <tr>
                  <td>
                    <Moment className="bg-none" format="MM/DD/YY">
                      {weight.createdAt}
                    </Moment>
                  </td>

                  <td>
                    {weight.bodyWeight.weight}
                    {` ${weight.bodyWeight.unit}`}
                  </td>
                  <td>{weight.notes}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>

      {!loggedToday && (
        <div className="text-center">
          <h3 className="text-light mb-4">
            You haven't logged a weight yet today.
          </h3>
          <Button onClick={handleOpen} variant="secondary">
            Log Weight
          </Button>
        </div>
      )}

      <LogWeightModal
        show={showLogWeight}
        setShow={setShowLogWeight}
        setLoggedToday={setLoggedToday}
      />
    </div>
  );
};

export default WeightLog;
