const express = require("express");
const router = express.Router();
const TrainingDay = require("../Models/trainingDayModel");
const { newTrainingDay } = require("../Controllers/trainingDayControllers");

router.post("/", newTrainingDay);

module.exports = router;
