import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import WeekCard from "../Components/WeekCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getWeeks } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";

const Block = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { blockId } = useParams();

  // Get Pieces of State
  const { user } = useSelector((state) => state.auth);
  const { weeks, message, isError, isLoading } = useSelector(
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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="text-light dis-font fs-1 mb-2">Hypertrophy Block</h3>
      <h4 className="text-light dis-font fs-4 mb-4">
        Feb 12, 2022 - Mar 24, 2022{" "}
      </h4>
      <Container fluid="lg" className="block-container mt-4 px-4">
        {weeks.map((week) => (
          <WeekCard
            name={week.week}
            days={week.trainingDays}
            id={week._id}
            blockId={blockId}
          />
        ))}

        {/* <Row>
          <Col lg={3} md={4} sm={6}>
            <WeekCard />
            <WeekCard />
            <WeekCard />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <WeekCard />
            <WeekCard />
            <WeekCard />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <WeekCard />
            <WeekCard />
            <WeekCard />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <WeekCard />
            <WeekCard />
            <WeekCard />
          </Col>
        </Row> */}
        <Container className="d-flex justify-content-center mt-4 mb-5">
          <Button variant="secondary">Add New Week</Button>
        </Container>
      </Container>
    </div>
  );
};

export default Block;
