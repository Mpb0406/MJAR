import React, { useState, useEffect } from "react";
import { Table, CloseButton, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { newSet } from "../features/Training/TrainingSlice";
import { setTypeClass } from "../Data/data";
import { MdDelete, MdEdit, MdContentCopy } from "react-icons/md";
import NewLiftModal from "../Modals/NewLiftModal";
import NewSetModal from "../Modals/NewSetModal";
import DeleteSetModal from "../Modals/DeleteSetModal";
import DeleteLiftModal from "../Modals/DeleteLiftModal";
import EditSetModal from "../Modals/EditSetModal";

const LiftTable = ({ day, setTriggerReload, triggerReload }) => {
  const { dayId, weekId } = useParams();
  const { days } = useSelector((state) => state.training);
  const dispatch = useDispatch();

  const [showLift, setShowLift] = useState(false);
  const [showSet, setShowSet] = useState(false);
  const [showEditSet, setShowEditSet] = useState(false);
  const [showDeleteSet, setShowDeleteSet] = useState(false);
  const [showDeleteLift, setShowDeleteLift] = useState(false);
  const [activeLift, setActiveLift] = useState(null);
  const [set, setSet] = useState(null);
  const [setData, setSetData] = useState({});

  const handleOpenLift = () => setShowLift(true);
  const handleOpenSet = (e) => {
    setShowSet(true);
    setActiveLift(e.target.id);
  };
  const handleOpenEditSet = (e) => {
    setActiveLift(e.target.getAttribute("name"));
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
    setActiveLift(e.target.getAttribute("name"));
    setShowDeleteSet(true);
    console.log(e.target);
  };
  const handleOpenDeleteLift = (e) => {
    setActiveLift(e.target.id);
    setShowDeleteLift(true);
    console.log(e.target);
  };

  const copySet = (e) => {
    const formData = {
      weight: e.target.getAttribute("weight"),
      reps: e.target.getAttribute("reps"),
      rpe: e.target.getAttribute("rpe"),
      setType: e.target.getAttribute("setType"),
    };
    dispatch(newSet([weekId, dayId, e.target.id, formData]));
    setTriggerReload(!triggerReload);
  };

  const getPrevSet = (lift) => {
    return days
      .filter((day) => day._id === dayId)[0]
      .lifts.filter((item) => item._id === lift._id)[0].sets[
      days
        .filter((day) => day._id === dayId)[0]
        .lifts.filter((item) => item._id === lift._id)[0].sets.length - 1
    ];
  };

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
                    <Badge bg={setTypeClass(set.setType)}>{set.setType}</Badge>
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
            <div className="d-flex justify-content-around m-auto px-2 py-2">
              <Button
                variant="link"
                disabled={lift.sets.length == 0}
                weight={getPrevSet(lift)?.weight}
                reps={getPrevSet(lift)?.reps}
                rpe={getPrevSet(lift)?.rpe}
                setType={getPrevSet(lift)?.setType}
                id={lift._id}
                className="w-75 mb-3 text-decoration-none text-secondary fw-bold"
                onClick={(e) => copySet(e)}>
                <MdContentCopy className="me-2 fs-4" />
                Copy Last Set
              </Button>
              <Button
                variant="secondary"
                className="mb-3 fw-bold fs-1 px-4"
                id={lift._id}
                onClick={(e) => handleOpenSet(e)}>
                <p className="bg-none mb-1">+</p>
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
        liftId={activeLift}
        setLift={setActiveLift}
        setTriggerReload={setTriggerReload}
        triggerReload={triggerReload}
      />
      <EditSetModal
        show={showEditSet}
        setShow={setShowEditSet}
        setData={setData}
        set={set}
        lift={activeLift}
        setTriggerReload={setTriggerReload}
        triggerReload={triggerReload}
      />
      <DeleteSetModal
        show={showDeleteSet}
        setShow={setShowDeleteSet}
        setId={set}
        liftId={activeLift}
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
        liftId={activeLift}
        setTriggerReload={setTriggerReload}
        triggerReload={triggerReload}
      />
    </>
  );
};

export default LiftTable;
