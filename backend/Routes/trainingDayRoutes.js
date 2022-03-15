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
} = require("../Controllers/trainingDayControllers");
const { protect } = require("../Middleware/authMiddleware");

router.post("/", protect, newTrainingDay);

router.get("/mytraining", protect, getMyTraining);

router.put("/:id", protect, updateTrainingDay);

router.delete("/:id", protect, deleteTrainingDay);

router.post("/:dayId/:liftId", protect, addNewSet);

router.put("/:dayId/:liftId/:setId", protect, updateSet);

router.delete("/:dayId/:liftId/:setId", protect, deleteSet);

module.exports = router;
