import React, { useState, useEffect, useLayoutEffect } from "react";
import { Dropdown, Tabs, Tab, Breadcrumb } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDays, getSelectDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import LiftTable from "../Components/LiftTable";

const TrainingDay = () => {
  const [activeTab, setActiveTab] = useState("");
  const [triggerReload, setTriggerReload] = useState(false);

  const { blockId, weekId, dayId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { days, weeks, blocks, history, isError, message, isLoading } =
    useSelector((state) => state.training);
  const day = days.filter((day) => day._id === dayId)[0];
  const block = blocks.filter((block) => block._id === blockId)[0];

  useEffect(
    () => {
      if (isError) {
        console.log(message);
      }

      if (!user) {
        navigate("/login");
      }

      dispatch(getDays(weekId));

      if (history.length !== block.weeks.length) {
        dispatch(getSelectDays([{ dayType: day.day }, blockId]));
      }

      setActiveTab(
        weeks
          .map((week) => week.trainingDays)
          .map((day) => day.includes(dayId))
          .indexOf(true)
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      dispatch,
      isError,
      message,
      user,
      navigate,
      weeks,
      dayId,
      triggerReload,
      history.length,
    ]
  );

  if (isLoading || history.length !== block.weeks.length) {
    return <Loader />;
  }
  const weekNames = ["Week 1", "Week 2", "Week 3", "Week 4", "Deload"];

  console.log(days.filter((day) => day._id === dayId)[0]);

  return (
    <div className="mt-4 pt-3 text-light">
      <Breadcrumb>
        <Breadcrumb.Item href="/training">My Training</Breadcrumb.Item>
        <Breadcrumb.Item href={`/training/${blockId}`}>
          {blocks.filter((block) => block._id === blockId)[0].block}
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`/training/${blockId}/${weekId}`}>
          {weeks.filter((week) => week._id === weekId)[0].week}
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
          {day.day.split(":")[0]}
        </Breadcrumb.Item>
      </Breadcrumb>
      <Dropdown>
        <Dropdown.Toggle
          variant="dark"
          className="bg-none d-flex align-items-center ps-0">
          <h1 className="pb-1 pe-3 bg-none d-flex text-wrap text-align-start">
            {day.day}
          </h1>
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark" className="w-75">
          <Dropdown.Item className="d-flex justify-content-center">
            <Link
              className="bg-none text-decoration-none text-light px-5 py-2"
              to={`/training/${blockId}/${weekId}/${dayId}/overview`}>
              Training Day Overview
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {day.lifts.length === 0 && (
        <h3 className="text-light text-center my-5">
          You don't have any lifts logged yet, bro. <br /> Get busy.
        </h3>
      )}

      <Tabs
        defaultActiveKey={activeTab}
        id="fill-tab-example"
        className=" mx-auto mt-2"
        fill
        variant="pills">
        {history.map((day, idx) => (
          <Tab eventKey={idx} title={weekNames[idx]}>
            <>
              <LiftTable
                day={day}
                setTriggerReload={setTriggerReload}
                triggerReload={triggerReload}
              />
            </>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default TrainingDay;
