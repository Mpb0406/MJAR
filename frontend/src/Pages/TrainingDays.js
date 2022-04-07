import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DayCard from "../Components/DayCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDays } from "../features/Training/TrainingSlice";

const TrainingDays = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { isError, message } = useSelector((state) => state.training);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getDays("62379eba4b57528883f71045"));
  }, [dispatch, isError, message, user, navigate]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="text-light dis-font fs-1 mb-2">Week 1</h3>
      <h4 className="text-light dis-font fs-4 mb-4">
        Feb 21, 2022 - Feb 27, 2022{" "}
      </h4>
      <Container fluid="lg" className="block-container mt-4 px-4">
        <Row>
          <Col lg={6} md={12}>
            <DayCard />
            <DayCard />
            <DayCard />
          </Col>
          <Col lg={6} md={12}>
            <DayCard />
            <DayCard />
          </Col>
        </Row>
        <Container className="d-flex justify-content-center mt-4 mb-5">
          <Button variant="secondary">Add New Day</Button>
        </Container>
      </Container>
    </div>
  );
};

export default TrainingDays;
