import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import DayCard from "../Components/DayCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDays } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import NewDayModal from "../Modals/NewDayModal";
import { reset } from "../features/Training/TrainingSlice";

const TrainingDays = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blockId, weekId } = useParams();

  const { user } = useSelector((state) => state.auth);
  const { isError, message, isLoading, days } = useSelector(
    (state) => state.training
  );

  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

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
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="text-light dis-font fs-1 mb-2">Week 1</h3>
      <h4 className="text-light dis-font fs-4 mb-4">
        Feb 21, 2022 - Feb 27, 2022{" "}
      </h4>
      <Container fluid="lg" className="mt-4 px-4">
        {days.map((day) => (
          <Container>
            <DayCard
              name={day.day}
              lifts={day.lifts}
              id={day._id}
              block={blockId}
              week={weekId}
              className=""
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
