const express = require("express");
const router = express.Router();
const TrainingBlock = require("../Models/trainingBlockModel");
const { protect } = require("../Middleware/authMiddleware");

router.get("/mytraining", protect, (req, res) =>
  res.send("Get Training Blocks")
);

router.post("/", protect, (req, res) => res.send("Add Training Block"));

router.delete("/:blockId", protect, (req, res) =>
  res.send("Delete Training Block")
);

module.exports = router;
