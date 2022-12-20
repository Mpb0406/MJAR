import React, { useState, useEffect } from "react";
import { Table, CloseButton, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { setTypeClass } from "../Data/data";
import { MdDelete, MdEdit } from "react-icons/md";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";
import DeleteSetModal from "../Modals/DeleteSetModal";
import DeleteLiftModal from "../Modals/DeleteLiftModal";

const LiftTable = ({ day, setTriggerReload, triggerReload }) => {
  const { dayId, weekId } = useParams();

  const [showLift, setShowLift] = useState(false);
  const [showSet, setShowSet] = useState(false);
  const [showDeleteSet, setShowDeleteSet] = useState(false);
  const [showDeleteLift, setShowDeleteLift] = useState(false);
  const [lift, setLift] = useState(null);
  const [set, setSet] = useState(null);

  const handleOpenLift = () => setShowLift(true);
  const handleOpenSet = (e) => {
    setLift(e.target.id);
    setShowSet(true);
  };

  const handleOpenDeleteSet = (e) => {
    setSet(e.target.id);
    setLift(e.target.getAttribute("name"));
    setShowDeleteSet(true);
    console.log(e.target);
  };
  const handleOpenDeleteLift = (e) => {
    setLift(e.target.id);
    setShowDeleteLift(true);
    console.log(e.target);
  };

  // console.log(dayId);
  return (
    <>
      {day.lifts.map((lift) => (
        <>
          <Table
            striped
            hover
            variant="dark"
            className="mt-4 mb-3 position-relative"
            responsive="sm">
            <thead>
              <tr className="text-center">
                <th className="fs-5" colSpan={8}>
                  {lift.exercise}
                  {dayId === day._id && (
                    <CloseButton
                      variant="white"
                      className="bg-none ms-3 align-self-center"
                      id={lift._id}
                      onClick={(e) => handleOpenDeleteLift(e)}
                    />
                  )}
                </th>
              </tr>
              <tr>
                <th>Set</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>RPE</th>
                <th>Type</th>
                {dayId === day._id && (
                  <>
                    <th>Edit</th>
                    <th>Delete</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {lift.sets.map((set, idx) => (
                <tr style={{ cursor: "pointer" }}>
                  <td className="fw-bold">{idx + 1}</td>
                  <td>{set.weight}</td>
                  <td>{set.reps}</td>
                  <td>{set.rpe === 5 ? "<6" : set.rpe}</td>
                  <td className="px-1">
                    <Badge className={setTypeClass(set.setType)}>
                      {set.setType}
                    </Badge>
                  </td>

                  {dayId === day._id && (
                    <>
                      <td className="w-auto">
                        <p className="bg-none mb-0 delete-set w-auto">
                          <MdEdit className="bg-none disable-clicks fs-2" />
                        </p>
                      </td>
                      <td className="w-auto">
                        {
                          <p
                            className="bg-none mb-0 delete-set w-auto"
                            name={lift._id}
                            id={set._id}
                            onClick={(e) => handleOpenDeleteSet(e)}>
                            <MdDelete className="bg-none disable-clicks fs-2" />
                          </p>
                        }
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
          {dayId === day._id && (
            <div className="d-grid w-75 m-auto gap-3 px-2 py-2">
              <Button
                variant="secondary"
                className="mb-3"
                id={lift._id}
                onClick={(e) => handleOpenSet(e)}>
                New Set
              </Button>
            </div>
          )}
        </>
      ))}

      {dayId === day._id && (
        <div className="d-grid w-75 mx-auto mb-5 gap-3 px-2 pt-2">
          <Button variant="primary" onClick={handleOpenLift}>
            Add Lift
          </Button>
        </div>
      )}

      <NewLiftModal
        show={showLift}
        setShow={setShowLift}
        setTriggerReload={setTriggerReload}
        triggerReload={triggerReload}
      />
      <NewSetModal
        show={showSet}
        setShow={setShowSet}
        liftId={lift}
        setTriggerReload={setTriggerReload}
        triggerReload={triggerReload}
      />
      <DeleteSetModal
        show={showDeleteSet}
        setShow={setShowDeleteSet}
        setId={set}
        liftId={lift}
        dayId={dayId}
        weekId={weekId}
        setTriggerReload={setTriggerReload}
        triggerReload={triggerReload}
      />
      <DeleteLiftModal
        show={showDeleteLift}
        setShow={setShowDeleteLift}
        weekId={weekId}
        dayId={dayId}
        liftId={lift}
        setTriggerReload={setTriggerReload}
        triggerReload={triggerReload}
      />
    </>
  );
};

export default LiftTable;
