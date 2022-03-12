const express = require("express");
const router = express.Router();
const TrainingDay = require("../Models/trainingDayModel");
const {
  newTrainingDay,
  getMyTraining,
} = require("../Controllers/trainingDayControllers");
const { protect } = require("../Middleware/authMiddleware");

router.post("/", protect, newTrainingDay);

router.get("/mytraining", protect, getMyTraining);

module.exports = router;
