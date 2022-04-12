const express = require("express");
const router = express.Router();
const TrainingDay = require("../Models/trainingDayModel");
const {
  newTrainingDay,
  getMyTraining,
  updateTrainingDay,
  deleteTrainingDay,
  addNewSet,
  updateSet,
  deleteSet,
  deleteLift,
} = require("../Controllers/trainingDayControllers");
const { protect } = require("../Middleware/authMiddleware");

router.post("/:weekId", protect, newTrainingDay);

router.get("/:weekId/mytraining", protect, getMyTraining);

router.put("/:dayId", protect, updateTrainingDay);

router.delete("/:weekId/:dayId", protect, deleteTrainingDay);

router.post("/:dayId/:liftId", protect, addNewSet);

router.put("/:dayId/:liftId/:setId", protect, updateSet);

router.delete("/:dayId/:liftId/:setId", protect, deleteSet);

router.delete("/:dayId/:liftId", protect, deleteLift);

module.exports = router;
