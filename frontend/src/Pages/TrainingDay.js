import React, { useState, useEffect } from "react";
import { Dropdown, Tabs, Tab, Breadcrumb } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDays, getSelectDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import Moment from "react-moment";
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

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    setActiveTab(
      weeks
        .map((week) => week.trainingDays)
        .map((day) => day.includes(dayId))
        .indexOf(true)
    );

    dispatch(getDays(weekId));
    dispatch(getSelectDays([{ dayType: day.day }, blockId]));
  }, [dispatch, isError, message, user, navigate, weeks, dayId, triggerReload]);

  if (isLoading) {
    return <Loader />;
  }

  console.log(weeks.filter((week) => week._id === weekId)[0].week);

  return (
    <div className="mt-5 text-light">
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
        className=" mx-auto"
        fill
        variant="pills">
        {history.map((day, idx) => (
          <Tab eventKey={idx} title={`W${idx + 1}`}>
            <>
              <h1>
                <Moment format="MM/DD/YY" day>
                  {day.createdAt}
                </Moment>
              </h1>
              <LiftTable
                day={day}
                setTriggerReload={setTriggerReload}
                triggerReload={triggerReload}
              />
            </>
          </Tab>
        ))}

        {/* <Tab eventKey="today" title="Today">
          {day.lifts.map((lift) => (
            <>
              <Table
                striped
                hover
                variant="dark"
                className="mt-4 mb-3 position-relative"
                responsive="sm">
                <thead>
                  <tr className="text-center">
                    <th className="fs-5" colSpan={8}>
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
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {lift.sets.map((set, idx) => (
                    <tr style={{ cursor: "pointer" }}>
                      <td className="fw-bold">{idx + 1}</td>
                      <td>{set.weight}</td>
                      <td>{set.reps}</td>
                      <td>{set.rpe === 5 ? "<6" : set.rpe}</td>
                      <td className="px-1">
                        <Badge className={setTypeClass(set.setType)}>
                          {set.setType}
                        </Badge>
                      </td>
                      <td className="w-auto">
                        <p className="bg-none mb-0 delete-set w-auto">
                          <MdEdit className="bg-none disable-clicks fs-2" />
                        </p>
                      </td>
                      <td className="w-auto">
                        {
                          <p
                            className="bg-none mb-0 delete-set w-auto"
                            name={lift._id}
                            id={set._id}
                            onClick={(e) => handleOpenDeleteSet(e)}>
                            <MdDelete className="bg-none disable-clicks fs-2" />
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
          ))}

          <div className="d-grid w-75 mx-auto mb-5 gap-3 px-2 pt-2">
            <Button variant="primary" onClick={handleOpenLift}>
              Add Lift
            </Button>
          </div>
        </Tab> */}
      </Tabs>
    </div>
  );
};

export default TrainingDay;
