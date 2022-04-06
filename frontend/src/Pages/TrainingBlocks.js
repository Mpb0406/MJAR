import React, { useEffect } from "react";
import BlockCard from "../Components/BlockCard";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlocks } from "../features/Training/TrainingSlice";

const TrainingBlocks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { blocks, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.training
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getBlocks());
  }, []);

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
