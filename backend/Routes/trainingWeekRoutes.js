const express = require("express");
const router = express.Router();
const TrainingWeek = require("../Models/trainingWeekModel");
const { protect } = require("../Middleware/authMiddleware");
const { createWeek } = require("../Controllers/trainingWeekControllers");

router.get("/mytraining", protect, (req, res) => res.send("My Training Weeks"));

router.post("/", protect, createWeek);

router.delete("/:weekId", protect, (req, res) => res.send("Delete Week"));

module.exports = router;
