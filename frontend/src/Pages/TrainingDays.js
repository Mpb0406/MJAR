import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DayCard from "../Components/DayCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";

const TrainingDays = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blockId, weekId } = useParams();

  const { user } = useSelector((state) => state.auth);
  const { isError, message, isLoading, days } = useSelector(
    (state) => state.training
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getDays(weekId));
  }, [dispatch, isError, message, user, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="text-light dis-font fs-1 mb-2">Week 1</h3>
      <h4 className="text-light dis-font fs-4 mb-4">
        Feb 21, 2022 - Feb 27, 2022{" "}
      </h4>
      <Container fluid="lg" className="block-container mt-4 px-4">
        {days.map((day) => (
          <DayCard
            name={day.day}
            lifts={day.lifts}
            id={day._id}
            block={blockId}
            week={weekId}
          />
        ))}

        <Container className="d-flex justify-content-center mt-4 mb-5">
          <Button variant="secondary">Add New Day</Button>
        </Container>
      </Container>
    </div>
  );
};

export default TrainingDays;
