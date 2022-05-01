import React from "react";
import { Tab, Nav, Col, Row, Navbar } from "react-bootstrap";
import dayIcon from "../img/dayIcon.png";
import weekIcon from "../img/weekIcon.png";
import blockIcon from "../img/blockIcon.png";
import rpeUnder6 from "../img/rpeUnder6.png";
import rpe6 from "../img/rpe6.png";
import rpe7 from "../img/rpe7.png";
import rpe75 from "../img/rpe7-5.png";
import rpe8 from "../img/rpe8.png";
import rpe85 from "../img/rpe8-5.png";
import rpe9 from "../img/rpe9.png";
import rpe95 from "../img/rpe9-5.png";
import rpe10 from "../img/rpe10.png";

const Features = () => {
  return (
    <div>
      <h1 className="text-light features-text text-center my-5">Features</h1>

      <div id="track-lifts" className="features-container bg-primary m-auto">
        <h2 className="bg-none text-light text-center py-4">
          Track Your Lifts By:
        </h2>
        <div className="icons-wrapper bg-none d-flex align-items-center justify-content-around mt-5">
          <div className="icon bg-none d-flex flex-column align-items-center">
            <img src={dayIcon} className="bg-none icon" alt="" />
            <h3 className="bg-none text-light my-3">Day</h3>
          </div>
          <div className="icon bg-none d-flex flex-column align-items-center">
            <img src={weekIcon} className="bg-none icon" alt="" />
            <h3 className="bg-none text-light my-3">Week</h3>
          </div>
          <div className="icon bg-none d-flex flex-column align-items-center">
            <img src={blockIcon} className="bg-none icon" alt="" />
            <h3 className="bg-none text-light my-3">Block</h3>
          </div>
        </div>
      </div>

      <div
        id="rpe-scale"
        className="rpe-container bg-none m-auto my-5 d-flex flex-column align-items-center">
        <h2 className="bg-none text-center text-light py-4">
          RPE (Rate of Perceived Exertion)
        </h2>
        <Tab.Container
          className="d-flex justify-content-center"
          defaultActiveKey="first">
          <Row className="rpe-table-row">
            <Col sm={2} xs={4} className="rpe-table-col-1 m-auto">
              <Nav
                variant="tabs"
                className="flex-column rpe-nav w-100 bg-primary border-0"
                navbar>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link
                    className="text-secondary fw-bold"
                    eventKey="first">{`RPE <6`}</Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link
                    className="text-secondary fw-bold"
                    eventKey="second">
                    RPE 6
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link className="text-secondary fw-bold" eventKey="third">
                    RPE 7
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link
                    className="text-secondary fw-bold"
                    eventKey="fourth">
                    RPE 7.5
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link className="text-secondary fw-bold" eventKey="fifth">
                    RPE 8
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link className="text-secondary fw-bold" eventKey="sixth">
                    RPE 8.5
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link
                    className="text-secondary fw-bold"
                    eventKey="seventh">
                    RPE 9
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link
                    className="text-secondary fw-bold"
                    eventKey="eighth">
                    RPE 9.5
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="bg-primary rpe-item">
                  <Nav.Link className="text-secondary fw-bold" eventKey="ninth">
                    RPE 10
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={6} xs={7} md={10} className="bg-primary">
              <Tab.Content className="bg-none">
                <Tab.Pane className="bg-none" eventKey="first">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">Warm-Up</h2>
                    <img
                      src={rpeUnder6}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could have done a lot more reps.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="second">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">
                      Very Easy
                    </h2>
                    <img
                      src={rpe6}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could have done about 4 more reps for an all out max
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="third">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">
                      Moderately Easy
                    </h2>
                    <img
                      src={rpe7}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could have definitely done 3 more reps but no more than
                      that.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="fourth">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">
                      Getting Difficult
                    </h2>
                    <img
                      src={rpe75}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could maybe have done 3 more reps on a good day.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="fifth">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">
                      Moderately Difficult
                    </h2>
                    <img
                      src={rpe8}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could have done 2 more reps for an all out max.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="sixth">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">
                      Difficult
                    </h2>
                    <img
                      src={rpe85}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could have maybe done 2 more reps.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="seventh">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">
                      Very Difficult
                    </h2>
                    <img
                      src={rpe9}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could have only done one more rep for an all out max.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="eighth">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">
                      Max Effort
                    </h2>
                    <img
                      src={rpe95}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could maybe have done one more rep or the same amount of
                      reps with slightly more weight.
                    </p>
                  </div>
                </Tab.Pane>
                <Tab.Pane className="bg-none" eventKey="ninth">
                  <div className="bg-none m-3 d-flex flex-column align-items-center justify-content-start">
                    <h2 className="bg-none text-light text-center">Max</h2>
                    <img
                      src={rpe10}
                      className="bg-none rpe-icon mt-4 img-fluid"
                      alt=""
                    />
                    <p className="bg-none text-light fs-5 mt-4">
                      Could not have done any more reps or the same amount of
                      reps with any more weight
                    </p>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>

      <h1 className="text-light text-center my-5">
        More Features Coming Soon...
      </h1>
    </div>
  );
};

export default Features;
