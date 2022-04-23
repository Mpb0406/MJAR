import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import week from "../img/week.png";
import DeleteWeekModal from "../Modals/DeleteWeekModal";

const WeekCard = ({ name, days, id, blockId }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

  return (
    <Card className="my-3 d-flex flex-row" bg="primary">
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
      <Button variant="secondary" className="px-4" onClick={handleOpen}>
        X
      </Button>
      <DeleteWeekModal
        show={show}
        setShow={setShow}
        blockId={blockId}
        weekId={id}
      />
    </Card>
  );
};

export default WeekCard;
