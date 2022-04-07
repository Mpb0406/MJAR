import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import week from "../img/week.png";

const WeekCard = ({ name, days, id, blockId }) => {
  return (
    <Card className="my-3" bg="primary">
      <Card.Body className="bg-primary text-light">
        <Card.Title className=" fs-4 z-10 text-drop-shadow bg-none">
          {name}
        </Card.Title>
        <Card.Text className="bg-primary z-10">
          {`${days.length} ${days.length === 1 ? "Day" : "Days"} Logged`} <br />
          <Card.Text className="bg-primary z-10 fs-small text-info fw-bold">
            2/21/22 - 2/27/22
          </Card.Text>
        </Card.Text>

        <Link
          to={`/training/${blockId}/${id}`}
          className="text-decoration-none hover-secondary hover-secondary bg-primary fs-5">
          View/Edit
        </Link>
        <img
          src={week}
          className="h-50 position-absolute absolute-center z-5"
          alt=""
        />
      </Card.Body>
    </Card>
  );
};

export default WeekCard;
