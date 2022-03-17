const express = require("express");
const router = express.Router();
const TrainingWeek = require("../Models/trainingWeekModel");
const { protect } = require("../Middleware/authMiddleware");

router.get("/mytraining", protect, (req, res) => res.send("My Training Weeks"));

router.post("/", protect, (req, res) => res.send("Add New Week"));

router.delete("/:weekId", protect, (req, res) => res.send("Delete Week"));

module.exports = router;
