import React, { useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";
import DeleteSetModal from "../Modals/DeleteSetModal";
import DeleteLiftModal from "../Modals/DeleteLiftModal";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import { Link } from "react-router-dom";
import { useStateContext } from "../features/Context/TrainingContext";
import LiftTable from "../Components/LiftTable";

const TrainingDay = () => {
  const {
    showLift,
    setShowLift,
    lift,
    set,
    showSet,
    setShowSet,
    showDeleteSet,
    setShowDeleteSet,
    showDeleteLift,
    setShowDeleteLift,
    handleOpenLift,
  } = useStateContext();

  const { blockId, weekId, dayId } = useParams();
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

      {day.lifts.map((lift) => (
        <LiftTable lift={lift} />
      ))}

      <div className="d-grid w-75 mx-auto mb-5 gap-3 px-2 pt-2">
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
