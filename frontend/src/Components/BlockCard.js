import React, { useState } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Button,
  Popover,
  OverlayTrigger,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import enterButton from "../img/enterButton.png";
import DeleteBlockModal from "../Modals/DeleteBlockModal";
import Moment from "react-moment";
import { MdDelete, MdEdit } from "react-icons/md";

const BlockCard = ({ showLiftPrompt, setShowLiftPrompt, block }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

  const handleEditLifts = () => setShowLiftPrompt(true);

  const popover = (
    <Popover className="" id="delete-popover">
      <div className="bg-none hover-background px-3">
        <MdEdit className="bg-none fs-4" />
        <Button
          className="fs-6 px-3 py-3 mb-0 cursor-pointer text-primary fw-bold text-decoration-none"
          variant="link"
          onClick={handleEditLifts}>
          Edit Lifts
        </Button>
      </div>
      <Popover.Body className="bg-none p-1 d-flex flex-column">
        <div className="bg-none hover-background px-3">
          <MdDelete className="bg-none fs-4" />
          <Button
            variant="link"
            onClick={handleOpen}
            className="fs-6 px-3 py-3 mb-0 cursor-pointer text-primary fw-bold  text-decoration-none">
            Delete
          </Button>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <Card className="d-flex flex-row align-items-center my-3" bg="info">
      <Container>
        <Row>
          <Col xs={2} md={1} className="bg-info d-flex align-items-center">
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="right"
              overlay={popover}>
              <h3 className="text-light bg-none ms-3 fs-2 cursor-pointer fw-bold">
                ⫶
              </h3>
            </OverlayTrigger>
          </Col>
          <Col md={8} xs={7} className="bg-info px-0">
            <Card.Body className="bg-info text-light ps-0">
              <Card.Title className="d-flex flex-column align-items-start justify-content-between bg-info my-0">
                <div className="d-flex bg-none">
                  <h6 className="fs-5 bg-info hover-primary">
                    <Link
                      to={`/training/${block._id}`}
                      className="text-decoration-none bg-none fw-bold text-light hover-primary">
                      {block.block}
                    </Link>
                  </h6>
                  <h6 className="bg-none d-flex align-items-end">
                    <Badge className="ms-0 shadow-md fs-small">
                      {block.microBlock}
                    </Badge>
                  </h6>
                </div>
                <h4 className="bg-info fs-6 text-sm-center">
                  <Moment className="bg-info gray-text" format="MM/DD/YY">
                    {block.createdAt}
                  </Moment>{" "}
                  -{" "}
                  <Moment className="bg-info gray-text" format="MM/DD/YY">
                    {block.updatedAt}
                  </Moment>
                </h4>
                <h4 className="fs-small fw-bold bg-secondary py-1 px-3 rounded-pill">{`${
                  block.weeks.length
                } ${block.weeks.length === 1 ? "Week" : "Weeks"}`}</h4>
              </Card.Title>
            </Card.Body>
          </Col>
          <Col xs={3} md={3} className="bg-info d-flex align-items-center m-0">
            <Card.Body className="bg-info text-light text-center ms-0">
              <Card.Text className="bg-info d-flex flex-column align-items-xs-center align-items-md-end justify-content-between my-0">
                <div className="bg-info button-wrapper d-flex align-items-center justify-content-center gap-2">
                  <p className="bg-info rounded-pill d-flex align-items-center justify-content-center mt-1">
                    <Link
                      to={`/training/${block._id}`}
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

      <DeleteBlockModal show={show} setShow={setShow} blockId={block._id} />
    </Card>
  );
};

export default BlockCard;
