import React, { useEffect, useState } from "react";
import BlockCard from "../Components/BlockCard";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlocks } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import NewBlockModal from "../Modals/NewBlockModal";

const TrainingBlocks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isError, message, isLoading, blocks } = useSelector(
    (state) => state.training
  );

  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);

  // Update Amount of Block Cards Shown
  const [truncateCards, setTruncateCards] = useState(3);

  const showMore = () => setTruncateCards(blocks.length);
  const showLess = () => setTruncateCards(3);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getBlocks());
  }, [dispatch, isError, message, navigate, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-5">
      <h3 className="fs-1 text-light">My Training Blocks</h3>
      <Container className="ps-0 mt-5">
        <div className="container-header d-flex justify-content-between align-items-center">
          <h4 className="fs-6 text-light ms-4 mb-0">Recent Blocks</h4>
          <button
            className="hover-secondary border-0 me-4"
            variant="link"
            onClick={truncateCards === 3 ? showMore : showLess}>
            {truncateCards === 3 ? "Show All" : "Show Less"}
          </button>
        </div>

        {blocks.slice(0, truncateCards).map((block) => (
          <BlockCard name={block.block} weeks={block.weeks} id={block._id} />
        ))}
      </Container>
      <Container className="d-flex justify-content-center mb-5">
        <Button variant="secondary" className="" onClick={handleOpen}>
          New Training Block
        </Button>
      </Container>

      <NewBlockModal show={show} setShow={setShow} />
    </div>
  );
};

export default TrainingBlocks;
