import React from "react";
import BlockCard from "../Components/BlockCard";
import { Container, Col, Row } from "react-bootstrap";

const TrainingBlocks = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <h3 className="text-light dis-font fs-1 mb-4">Training Blocks</h3>
      <Container fluid="lg" className="block-container mt-4 px-4">
        <Row>
          <Col lg={3} md={4} sm={6}>
            <BlockCard />
            <BlockCard />
            <BlockCard />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <BlockCard />
            <BlockCard />
            <BlockCard />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <BlockCard />
            <BlockCard />
            <BlockCard />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <BlockCard />
            <BlockCard />
            <BlockCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrainingBlocks;
