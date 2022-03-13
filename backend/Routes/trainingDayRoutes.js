const express = require("express");
const router = express.Router();
const TrainingDay = require("../Models/trainingDayModel");
const {
  newTrainingDay,
  getMyTraining,
  updateTrainingDay,
  deleteTrainingDay,
  addNewSet,
} = require("../Controllers/trainingDayControllers");
const { protect } = require("../Middleware/authMiddleware");

router.post("/", protect, newTrainingDay);

router.get("/mytraining", protect, getMyTraining);

router.put("/:id", protect, updateTrainingDay);

router.delete("/:id", protect, deleteTrainingDay);

router.put("/:dayId/:liftId", protect, addNewSet);

module.exports = router;
