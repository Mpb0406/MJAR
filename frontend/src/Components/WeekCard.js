import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import enterButton from "../img/enterButton.png";
import DeleteWeekModal from "../Modals/DeleteWeekModal";
import Moment from "react-moment";

const WeekCard = ({ name, days, id, blockId, startDate, endDate }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

  const popover = (
    <Popover id="delete-popover">
      <Popover.Body className="bg-none py-0 px-0">
        <Button
          variant="link"
          onClick={handleOpen}
          className="bg-none fs-6 px-5 py-3 mb-0 cursor-pointer text-secondary">
          Delete
        </Button>
      </Popover.Body>
    </Popover>
  );

  return (
    <Card className="d-flex flex-row align-items-center my-3" bg="info">
      <Container>
        <Row>
          <Col xs={2} md={1} className="bg-info d-flex align-items-center">
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <h3 className="text-light bg-none ms-3 fs-2 cursor-pointer fw-bold">
                ⫶
              </h3>
            </OverlayTrigger>
          </Col>
          <Col md={8} xs={7} className="bg-info ps-0">
            <Card.Body className="bg-info text-light ps-0">
              <Card.Title className="d-flex flex-column align-items-start justify-content-between bg-info my-0">
                <h3 className="fs-4 fw-bold hover-primary bg-info">{name}</h3>
                <h4 className="bg-info fs-6 text-sm-center">
                  <Moment className="bg-info gray-text" format="MM/DD/YY">
                    {startDate}
                  </Moment>{" "}
                  -{" "}
                  <Moment className="bg-info gray-text" format="MM/DD/YY">
                    {endDate}
                  </Moment>
                </h4>
                <h4 className="fs-small fw-bold bg-secondary py-1 px-3 rounded-pill">{`${
                  days.length
                } ${days.length === 1 ? "Day" : "Days"}`}</h4>
              </Card.Title>
            </Card.Body>
          </Col>
          <Col xs={3} md={3} className="bg-info d-flex align-items-center m-0">
            <Card.Body className="bg-info text-light text-center ms-0">
              <Card.Text className="bg-info d-flex flex-column align-items-xs-center align-items-md-end justify-content-between my-0">
                <div className="bg-info rounded-pill d-flex align-items-center justify-content-center mt-1">
                  <p className="bg-info rounded-pill d-flex align-items-center justify-content-center mt-1">
                    <Link
                      to={`/training/${blockId}/${id}`}
                      className="text-decoration-none bg-none text-light px-2">
                      <img
                        className="bg-none enter-button"
                        src={enterButton}
                        alt=""
                      />
                    </Link>
                  </p>
                </div>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
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
