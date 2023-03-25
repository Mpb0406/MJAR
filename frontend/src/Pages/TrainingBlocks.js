import React, { useEffect, useState } from "react";
import BlockCard from "../Components/BlockCard";
import { Container, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBlocks } from "../features/Training/TrainingSlice";
import Loader from "../Components/Loader";
import NewBlockModal from "../Modals/NewBlockModal";
import BlockLiftModal from "../Modals/BlockLiftModal";

const TrainingBlocks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { isError, message, isLoading, blocks } = useSelector(
    (state) => state.training
  );

  const [showNewBlock, setShowNewBlock] = useState(false);
  const [showLiftPrompt, setShowLiftPrompt] = useState(false);
  const handleOpen = () => setShowNewBlock(true);

  // Update Amount of Block Cards Shown
  const [truncateCards, setTruncateCards] = useState(3);

  const showMore = () => setTruncateCards(blocks.length);
  const showLess = () => setTruncateCards(3);

  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  const reverseBlocks = blocks.map((block) => block).reverse();

  console.log(reverseBlocks);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!localStorageUser) {
      navigate("/login");
    }

    dispatch(getBlocks());
  }, [dispatch, isError, message, navigate, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-5">
      <BlockLiftModal />
      <h3 className="fs-1 text-light">My Training Blocks</h3>

      {blocks.length === 0 && (
        <div className="mt-5">
          <h3 className="text-light text-center">
            Get started by adding a new Training Block
          </h3>
          <h3 className="text-light text-center fs-5">
            You will be prompted to choose your lifts. These will be used to
            autopopulate each training day. Set your lifts this way to ensure
            better stat tracking
          </h3>
        </div>
      )}

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

        {reverseBlocks.slice(0, truncateCards).map((block) => (
          <BlockCard
            showLiftPrompt={showLiftPrompt}
            setShowLiftPrompt={setShowLiftPrompt}
            block={block}
          />
        ))}
      </Container>
      <Container className="d-flex justify-content-center mb-5">
        <Button variant="secondary" className="" onClick={handleOpen}>
          New Training Block
        </Button>
      </Container>

      <NewBlockModal
        showNewBlock={showNewBlock}
        setShowNewBlock={setShowNewBlock}
        showLiftPrompt={showLiftPrompt}
        setShowLiftPrompt={setShowLiftPrompt}
      />
      <BlockLiftModal
        showLiftPrompt={showLiftPrompt}
        setShowLiftPrompt={setShowLiftPrompt}
      />
    </div>
  );
};

export default TrainingBlocks;
