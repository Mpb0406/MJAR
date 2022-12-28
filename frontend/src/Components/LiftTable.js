import React, { useState } from "react";
import { Table, CloseButton, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { setTypeClass } from "../Data/data";
import { MdDelete, MdEdit } from "react-icons/md";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";
import DeleteSetModal from "../Modals/DeleteSetModal";
import DeleteLiftModal from "../Modals/DeleteLiftModal";
import EditSetModal from "../Modals/EditSetModal";

const LiftTable = ({ day, setTriggerReload, triggerReload }) => {
  const { dayId, weekId } = useParams();
  const { days } = useSelector((state) => state.training);

  const [showLift, setShowLift] = useState(false);
  const [showSet, setShowSet] = useState(false);
  const [showEditSet, setShowEditSet] = useState(false);
  const [showDeleteSet, setShowDeleteSet] = useState(false);
  const [showDeleteLift, setShowDeleteLift] = useState(false);
  const [lift, setLift] = useState(null);
  const [set, setSet] = useState(null);
  const [setData, setSetData] = useState({});

  const handleOpenLift = () => setShowLift(true);
  const handleOpenSet = (e) => {
    setLift(e.target.id);
    setShowSet(true);
  };
  const handleOpenEditSet = (e) => {
    setLift(e.target.getAttribute("name"));
    setSet(e.target.id);
    setSetData(
      days
        .filter((day) => day._id === dayId)[0]
        .lifts.filter((lift) => lift._id === e.target.getAttribute("name"))[0]
        .sets.filter((set) => set._id === e.target.id)[0]
    );
    setShowEditSet(true);
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
  // console.log(set);

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
                <th className="text-center">Set</th>
                <th className="text-end">Weight</th>
                <th className="text-start">Reps</th>
                <th className="text-center">RPE</th>
                <th className="text-center">Type</th>
                {dayId === day._id && (
                  <>
                    <th className="text-center">Edit</th>
                    <th className="text-center">Delete</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {lift.sets.map((set, idx) => (
                <tr className="text-align-center" style={{ cursor: "pointer" }}>
                  <td className="fw-bold text-center">{idx + 1}</td>
                  <td className="text-end">{set.weight} ×</td>
                  <td>{set.reps}</td>
                  <td className="text-center">
                    {set.rpe && "@"}
                    {set.rpe === 5 ? "<6" : set.rpe}
                  </td>
                  <td className="px-1 text-center">
                    <Badge className={setTypeClass(set.setType)}>
                      {set.setType}
                    </Badge>
                  </td>
                  {dayId === day._id && (
                    <>
                      <td className="w-auto text-center">
                        <p
                          className="bg-none mb-0 delete-set w-auto"
                          name={lift._id}
                          id={set._id}
                          onClick={(e) => handleOpenEditSet(e)}>
                          <MdEdit className="bg-none disable-clicks fs-2" />
                        </p>
                      </td>
                      <td className="w-auto text-center">
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
      <EditSetModal
        show={showEditSet}
        setShow={setShowEditSet}
        setData={setData}
        set={set}
        lift={lift}
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
