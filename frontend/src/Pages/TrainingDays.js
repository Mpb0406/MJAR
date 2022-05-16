import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import DayCard from "../Components/DayCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import NewDayModal from "../Modals/NewDayModal";
import { reset } from "../features/Training/TrainingSlice";
import Moment from "react-moment";

const TrainingDays = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blockId, weekId } = useParams();

  const { user } = useSelector((state) => state.auth);
  const { isError, message, isLoading, days, weeks } = useSelector(
    (state) => state.training
  );

  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

  const week = weeks.filter((item) => item._id === weekId)[0];

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getDays(weekId));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, isError, message, user, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-5">
      <h3 className="fs-1 text-light">{week.week}</h3>
      <h4 className="text-light fs-4 mb-4">
        <Moment format="MM/DD/YY">{week.createdAt}</Moment> {" - "}
        <Moment format="MM/DD/YY">{week.updatedAt}</Moment>
      </h4>
      <Container fluid="lg" className="mt-5 ps-0">
        {days.length === 0 && (
          <h3 className="text-light text-center">
            You don't have any days logged yet, bro. <br /> Not Good.
          </h3>
        )}

        {days.map((day) => (
          <Container className="mt-5 ps-0">
            <DayCard
              name={day.day}
              lifts={day.lifts}
              id={day._id}
              block={blockId}
              week={weekId}
              date={day.createdAt}
            />
          </Container>
        ))}

        <Container className="d-flex justify-content-center mt-4 mb-5">
          <Button variant="secondary" onClick={handleOpen}>
            Add New Day
          </Button>
        </Container>
      </Container>

      <NewDayModal show={show} setShow={setShow} />
    </div>
  );
};

export default TrainingDays;
