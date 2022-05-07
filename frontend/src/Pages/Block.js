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

  const block = blocks.filter((block) => block._id === blockId)[0];

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getWeeks(blockId));
  }, [dispatch, isError, message, navigate, user, blockId]);

  if (isLoading) {
    return <Loader />;
  }

  const blockStart = weeks[0].createdAt;
  const blockEnd = weeks[weeks.length - 1].updatedAt;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="text-light dis-font fs-1 mb-2">{block.block}</h3>
      <h4 className="text-light dis-font fs-4 mb-4">
        <Moment format="MM/DD/YY">{blockStart}</Moment>
        {" - "}
        <Moment format="MM/DD/YY">{blockEnd}</Moment>
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
