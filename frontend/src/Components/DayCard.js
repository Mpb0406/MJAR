import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import blockpic from "../img/block.png";
import DeleteDayModal from "../Modals/DeleteDayModal";

const DayCard = ({ name, lifts, id, block, week }) => {
  const { weekId } = useParams();
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

  return (
    <Card className="my-3 d-flex flex-row" bg="primary">
      <Card.Body className="bg-primary text-light position-relative ">
        <Card.Title className=" fs-4 z-10 text-drop-shadow bg-none">
          {name}
        </Card.Title>
        <Card.Text className="bg-primary z-10">{`${lifts.length} ${
          lifts.length === 1 ? "Lift" : "Lifts"
        } Logged`}</Card.Text>
        <Link
          to={`/training/${block}/${week}/${id}`}
          className="text-decoration-none hover-secondary hover-secondary bg-primary fs-5">
          View/Edit
        </Link>
        <img
          src={blockpic}
          className="h-50 position-absolute absolute-center z-5"
          alt=""
        />
      </Card.Body>
      <Button variant="secondary" className="px-4" onClick={handleOpen}>
        X
      </Button>
      <DeleteDayModal
        show={show}
        setShow={setShow}
        weekId={weekId}
        dayId={id}
      />
    </Card>
  );
};

export default DayCard;
