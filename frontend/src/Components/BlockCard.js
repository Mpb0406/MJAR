import React, { useState } from "react";
import { Card, Container, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import strength from "../img/strength.png";
import DeleteBlockModal from "../Modals/DeleteBlockModal";

const BlockCard = ({ name, weeks, id }) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);

  return (
    <Card
      className="d-flex flex-row align-items-center my-3 border-2 border-info"
      bg="dark"
      role="button">
      <Container>
        <Row>
          <Col xs={3} md={2} lg={1}>
            <img
              src={strength}
              className="ms-3 me-5 my-3 card-img flex-grow-3"
              alt=""
            />
          </Col>
          <Col>
            <Card.Body className="bg-none text-light">
              <Card.Title className="d-flex flex-column align-items-start justify-content-between my-0">
                <h3 className="fs-4 hover-primary">{name}</h3>
                <h4 className="fs-6">{`${weeks.length} ${
                  weeks.length === 1 ? "Week" : "Weeks"
                } Logged`}</h4>
              </Card.Title>
            </Card.Body>
          </Col>
          <Col>
            <Card.Body className="bg-none text-light text-center ms-4">
              <Card.Text className="d-flex flex-column align-items-xs-center align-items-md-end justify-content-between my-0">
                <h4 className="fs-6 text-sm-center">2/21/22 - 3/30/22</h4>
                <div className="button-wrapper d-flex align-items-center justify-content-between gap-2">
                  <Button variant="secondary rounded-pill d-flex align-items-center justify-content-center mt-1">
                    <Link
                      to={`/training/${id}`}
                      className="text-decoration-none bg-none text-light px-2">
                      View
                    </Link>
                  </Button>
                  <Button
                    variant="secondary rounded-circle d-flex align-items-center justify-content-center mt-1"
                    onClick={handleOpen}>
                    X
                  </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>

      <DeleteBlockModal show={show} setShow={setShow} blockId={id} />
    </Card>
  );
};

export default BlockCard;
