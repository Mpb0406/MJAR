import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import block from "../img/block.png";

const DayCard = ({ name, lifts, id }) => {
  return (
    <Card className="my-3" bg="primary">
      <Card.Body className="bg-primary text-light position-relative ">
        <Card.Title className=" fs-4 z-10 text-drop-shadow bg-none">
          {name}
        </Card.Title>
        <Card.Text className="bg-primary z-10">{`${lifts.length} ${
          lifts.length === 1 ? "Lift" : "Lifts"
        } Logged`}</Card.Text>
        <Link
          to="/training/dayId"
          className="text-decoration-none hover-secondary hover-secondary bg-primary fs-5">
          View/Edit
        </Link>
        <img
          src={block}
          className="h-50 position-absolute absolute-center z-5"
          alt=""
        />
      </Card.Body>
    </Card>
  );
};

export default DayCard;
