import React from "react";
import BlockCard from "../Components/BlockCard";
import { Container, Button } from "react-bootstrap";

const TrainingBlocks = () => {
  return (
    <div className="mt-5">
      <h3 className="fs-1 text-light">My Training Blocks</h3>
      <Container className="ps-0 mt-5">
        <div className="container-header d-flex justify-content-between align-items-center">
          <h4 className="fs-6 text-light ms-4 mb-0">Recent Blocks</h4>
          <button className="hover-secondary border-0 me-4" variant="link">
            Show More
          </button>
        </div>
        <BlockCard />
        <BlockCard />
      </Container>
    </div>
  );
};

export default TrainingBlocks;
