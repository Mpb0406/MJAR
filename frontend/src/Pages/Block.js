import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import WeekCard from "../Components/WeekCard";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWeeks } from "../features/Training/TrainingSlice";

const Block = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get Pieces of State
  const { user } = useSelector((state) => state.auth);
  const { message, isError } = useSelector((state) => state.training);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getWeeks("62379e104b57528883f7103e"));
  }, [dispatch, isError, message, navigate, user]);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="text-light dis-font fs-1 mb-2">Hypertrophy Block</h3>
      <h4 className="text-light dis-font fs-4 mb-4">
        Feb 12, 2022 - Mar 24, 2022{" "}
      </h4>
      <Container fluid="lg" className="block-container mt-4 px-4">
        <Row>
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
        </Row>
        <Container className="d-flex justify-content-center mt-4 mb-5">
          <Button variant="secondary">Add New Week</Button>
        </Container>
      </Container>
    </div>
  );
};

export default Block;
