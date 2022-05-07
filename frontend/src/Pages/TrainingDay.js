import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";
import DeleteSetModal from "../Modals/DeleteSetModal";
import DeleteLiftModal from "../Modals/DeleteLiftModal";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";

const TrainingDay = () => {
  const [showLift, setShowLift] = useState(false);
  const [lift, setLift] = useState(null);
  const [set, setSet] = useState(null);
  const [showSet, setShowSet] = useState(false);
  const [showDeleteSet, setShowDeleteSet] = useState(false);
  const [showDeleteLift, setShowDeleteLift] = useState(false);

  const handleOpenLift = () => setShowLift(true);
  const handleOpenSet = (e) => {
    setLift(e.target.id);
    setShowSet(true);
  };
  const handleOpenDeleteSet = (e) => {
    setSet(e.target.id);
    setLift(e.target.name);
    setShowDeleteSet(true);
  };
  const handleOpenDeleteLift = (e) => {
    setLift(e.target.id);
    setShowDeleteLift(true);
    console.log(lift);
  };

  const { weekId, dayId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { days, isError, message, isLoading } = useSelector(
    (state) => state.training
  );
  const day = days.filter((day) => day._id === dayId)[0];

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getDays(weekId));
  }, [dispatch, isError, message, user, navigate, lift, set]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-5 text-light">
      <h1 className="pb-1">{day.day}</h1>

      {day.lifts.length === 0 && (
        <h3 className="text-light text-center my-5">
          You don't have any lifts logged yet, bro. <br /> Get busy.
        </h3>
      )}

      {day.lifts.map((lift) => (
        <>
          <Table
            striped
            bordered
            hover
            variant="dark"
            className="mt-4 position-relative"
            responsive="sm">
            <thead>
              <tr className="text-center">
                <th
                  colSpan={6}
                  id={lift._id}
                  onClick={(e) => handleOpenDeleteLift(e)}>
                  {lift.exercise}
                </th>
              </tr>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>RPE</th>
                <th>Type</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {lift.sets.map((set, idx) => (
                <tr style={{ cursor: "pointer" }}>
                  <td>{idx + 1}</td>
                  <td>{set.weight}</td>
                  <td>{set.reps}</td>
                  <td>{set.rpe === 5 ? "<6" : set.rpe}</td>
                  <td>{set.setType}</td>
                  <td>
                    <div className="hover-delete px-1 bg-none d-flex justify-content-around">
                      {
                        <Button
                          variant="secondary"
                          name={lift._id}
                          id={set._id}
                          onClick={(e) => handleOpenDeleteSet(e)}>
                          X
                        </Button>
                      }
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-grid w-75 m-auto gap-3 px-2 py-2">
            <Button
              variant="secondary"
              id={lift._id}
              onClick={(e) => handleOpenSet(e)}>
              New Set
            </Button>
          </div>
        </>
      ))}

      <div className="d-grid w-75 m-auto gap-3 px-2 pt-2">
        <Button variant="primary" onClick={handleOpenLift}>
          Add Lift
        </Button>
      </div>

      <NewSetModal show={showSet} setShow={setShowSet} liftId={lift} />
      <NewLiftModal show={showLift} setShow={setShowLift} />
      <DeleteSetModal
        show={showDeleteSet}
        setShow={setShowDeleteSet}
        setId={set}
        liftId={lift}
        dayId={dayId}
        weekId={weekId}
      />
      <DeleteLiftModal
        show={showDeleteLift}
        setShow={setShowDeleteLift}
        weekId={weekId}
        dayId={dayId}
        liftId={lift}
      />
    </div>
  );
};

export default TrainingDay;
