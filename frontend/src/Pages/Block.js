import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import WeekCard from "../Components/WeekCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getWeeks } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import NewWeekModal from "../Modals/NewWeekModal";
import Moment from "react-moment";

const Block = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blockId } = useParams();

  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);

  // Get Pieces of State
  const { user } = useSelector((state) => state.auth);
  const { weeks, message, isError, isLoading, blocks } = useSelector(
    (state) => state.training
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getWeeks(blockId));
  }, [dispatch, isError, message, navigate, user, blockId]);

  const block = blocks.filter((block) => block._id === blockId)[0];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-5">
      <h3 className="fs-1 text-light ms-4">{block.block}</h3>
      <h4 className="text-light fs-4 mb-4 ms-4">
        <Moment format="MM/DD/YY">{weeks[0] ? weeks[0].createdAt : ""}</Moment>
        {" - "}
        <Moment format="MM/DD/YY">
          {weeks[0] ? weeks[weeks.length - 1].updatedAt : ""}
        </Moment>
      </h4>

      {weeks.length === 0 && (
        <h3 className="text-light mt-3 text-center">
          You don't have any weeks logged yet, bro. <br /> Not good.
        </h3>
      )}

      <Container fluid="lg" className="block-container mt-4 px-4">
        {weeks.map((week) => (
          <WeekCard
            name={week.week}
            days={week.trainingDays}
            id={week._id}
            blockId={blockId}
            startDate={week.createdAt}
            endDate={week.updatedAt}
          />
        ))}
        <Container className="d-flex justify-content-center mt-4 mb-5">
          <Button variant="secondary" onClick={handleOpen}>
            Add New Week
          </Button>
        </Container>
      </Container>

      <NewWeekModal show={show} setShow={setShow} />
    </div>
  );
};

export default Block;
