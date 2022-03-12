const express = require("express");
const router = express.Router();
const TrainingDay = require("../Models/trainingDayModel");
const { newTrainingDay } = require("../Controllers/trainingDayControllers");
const { protect } = require("../Middleware/authMiddleware");

router.post("/", protect, newTrainingDay);

module.exports = router;
