const express = require("express");
const router = express.Router();
const TrainingWeek = require("../Models/trainingWeekModel");
const { protect } = require("../Middleware/authMiddleware");
const {
  getTrainingWeeks,
  createWeek,
  deleteWeek,
} = require("../Controllers/trainingWeekControllers");

router.get("/mytraining", protect, getTrainingWeeks);

router.post("/:blockId", protect, createWeek);

router.delete("/:blockId/:weekId", protect, deleteWeek);

module.exports = router;