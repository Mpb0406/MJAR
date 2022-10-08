const express = require("express");
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");
const {
  getTrainingBlocks,
  createTrainingBlock,
  addBlockLift,
  deleteTrainingBlock,
} = require("../Controllers/trainingBlockControllers");

router.get("/mytraining", protect, getTrainingBlocks);

router.post("/", protect, createTrainingBlock);

router.put("/:blockId", protect, addBlockLift);

router.delete("/:blockId", protect, deleteTrainingBlock);

module.exports = router;
