import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";

const TrainingDay = () => {
  const [showLift, setShowLift] = useState(false);
  const [lift, setLift] = useState(null);
  const [showSet, setShowSet] = useState(false);

  const handleOpenLift = () => setShowLift(true);
  const handleOpenSet = (e) => {
    setLift(e.target.id);
    setShowSet(true);
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
  }, [dispatch, isError, message, user, navigate, lift]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-5 text-light">
      <h1 className="pb-1">Training Day</h1>

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
                <th colSpan={5}>{lift.exercise}</th>
              </tr>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>RPE</th>
                <th>Set-Type</th>
              </tr>
            </thead>
            <tbody>
              {lift.sets.map((set, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{set.weight}</td>
                  <td>{set.reps}</td>
                  <td>{set.rpe}</td>
                  <td>{set.setType}</td>
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
    </div>
  );
};

export default TrainingDay;
