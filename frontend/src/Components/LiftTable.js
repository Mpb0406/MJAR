import {
  Table,
  CloseButton,
  Button,
  Badge,
  Accordion,
  Card,
} from "react-bootstrap";
import { useStateContext } from "../features/Context/TrainingContext";
import { setTypeClass } from "../Data/util";
import { MdDelete } from "react-icons/md";
import LiftInfoToggle from "./LiftInfoToggle";
import LiftInfoBody from "./LiftInfoBody";
import AccessoryInfoBody from "./AccessoryInfoBody";
import { MdOutlineExpandMore } from "react-icons/md";
import { weekDetails } from "../Data/data";
import { calcWorkingWeight } from "../Data/util";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const LiftTable = ({ lift, mainLifts, block, day }) => {
  const {
    handleOpenDeleteLift,
    handleOpenDeleteSet,
    handleOpenSet,
    adjustedWeight,
    toggleWeight,
  } = useStateContext();

  // Get Main Lift Variation Name
  const isMainLift = mainLifts.filter((item) => item === lift.exercise)[0];
  // Get MainLift Variation Type
  const mainLiftType = block.lifts.filter((lift) => lift.lift === isMainLift)[0]
    ?.liftType;
  // Get Top Set
  const topSet = lift.sets
    .filter((set) => set.setType === "Top Set")
    .slice(-1)[0];
  // Get Week to compare reps and RPE
  const { weeks } = useSelector((state) => state.training);
  const { weekId } = useParams();
  const week = weeks.filter((week) => week._id === weekId)[0].week;
  const weekPrompt =
    block.block === "Peak"
      ? weekDetails[block.block]?.weeks?.filter((item) => item.week === week)[0]
      : weekDetails[block.block + block?.microBlock?.slice(6)]?.weeks?.filter(
          (item) => item.week === week
        )[0];

  const workingWeight = calcWorkingWeight(
    topSet?.weight,
    weekPrompt.percent,
    topSet?.rpe - weekPrompt.rpe,
    mainLiftType
  );
  const normalWorkingWeight =
    Math.ceil((topSet?.weight * (weekPrompt.percent * 0.01)) / 5) * 5;

  return (
    <>
      <Table
        striped
        hover
        variant="dark"
        className="mt-5 mb-3 position-relative"
        responsive="sm">
        <thead className="">
          <tr>
            <td colSpan={12} className="border-0 p-0">
              <Accordion className="bg-none w-100">
                <Card className="bg-none w-100 border-0">
                  <Card.Header className="bg-info border-0">
                    <LiftInfoToggle eventKey="0">
                      <div className="bg-none d-flex justify-content-between align-items-center">
                        <div></div>
                        <div className="bg-none">
                          {lift.exercise}
                          {
                            <MdOutlineExpandMore className="bg-none ms-2 text-light" />
                          }
                        </div>
                        <div className="bg-none d-flex justify-content-end">
                          <CloseButton
                            variant="white"
                            className="bg-none mt-1 d-inline-block fs-small"
                            id={lift._id}
                            onClick={(e) => handleOpenDeleteLift(e)}
                          />
                        </div>
                      </div>
                    </LiftInfoToggle>
                  </Card.Header>
                  {isMainLift ? (
                    <Accordion.Collapse className="bg-input w-100" eventKey="0">
                      <LiftInfoBody mainLiftType={mainLiftType} />
                    </Accordion.Collapse>
                  ) : (
                    <Accordion.Collapse className="bg-input w-100" eventKey="0">
                      <AccessoryInfoBody />
                    </Accordion.Collapse>
                  )}
                </Card>
              </Accordion>
            </td>
          </tr>
          <tr>
            <th colSpan={1} className="text-center fs-small">
              #
            </th>
            <th colSpan={3} className="text-center fs-small">
              Set
            </th>
            <th colSpan={2} className="text-center fs-small">
              RPE
            </th>
            <th colSpan={4} className="text-center fs-small">
              Type
            </th>
            <th colSpan={2} className="text-center fs-small">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {lift.sets.map((set, idx) => (
            <tr style={{ cursor: "pointer" }}>
              <td colSpan={1} className="fw-bold text-center">
                {idx + 1}
              </td>
              <td
                colSpan={3}
                className="text-center">{`${set.weight} × ${set.reps}`}</td>
              <td colSpan={2} className="text-center">
                {set.rpe === 5 ? "<6" : set.rpe}
              </td>
              <td colSpan={4} className="text-center">
                <Badge
                  className="shadow-lg set-badge"
                  bg={setTypeClass(set.setType)}>
                  {set.setType}
                </Badge>
              </td>
              <td colSpan={2} className="text-center">
                {
                  <p
                    className="bg-none mb-0"
                    name={lift._id}
                    id={set._id}
                    onClick={(e) => handleOpenDeleteSet(e)}>
                    <MdDelete className="bg-none text-secondary fs-2 pe-none" />
                  </p>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Working Weight Auto Calc */}
      {isMainLift && (
        <div className="text-center my-3">
          {topSet && (
            <div className="d-flex justify-content-center align-items-center">
              <h3 onClick={toggleWeight} className="fs-4 fw-bold mb-0">
                Working Weight:{" "}
                {adjustedWeight ? workingWeight : normalWorkingWeight}
              </h3>
              {adjustedWeight && (
                <p className="fs-small mb-0 ms-1">{`(Adjusted)`}</p>
              )}
            </div>
          )}
        </div>
      )}

      <div className="d-grid w-75 m-auto gap-3 px-2 py-2">
        <Button
          variant="secondary"
          className="mb-3"
          id={lift._id}
          onClick={(e) => handleOpenSet(e)}>
          New Set
        </Button>
      </div>
    </>
  );
};

export default LiftTable;
