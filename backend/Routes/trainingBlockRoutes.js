const express = require("express");
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");
const {
  getTrainingBlocks,
  createTrainingBlock,
  deleteTrainingBlock,
} = require("../Controllers/trainingBlockControllers");

router.get("/mytraining", protect, getTrainingBlocks);

router.post("/", protect, createTrainingBlock);

router.delete("/:blockId", protect, deleteTrainingBlock);

module.exports = router;
