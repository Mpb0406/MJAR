const asyncHandler = require("express-async-handler");
const TrainingDay = require("../Models/trainingDayModel");
const TrainingWeek = require("../Models/trainingWeekModel");
const TrainingBlock = require("../Models/trainingBlockModel");
const User = require("../Models/userModel");

// @desc    Get All User Training Blocks
// @route   GET /api/trainingblocks/mytraining
// @access  Private
const getTrainingBlocks = asyncHandler(async (req, res) => {
  const blocks = await TrainingBlock.find({ user: req.user.id });

  res.json(blocks);
});

// @desc    Create New Training Block
// @route   POST /api/trainingblocks
// @access  Private
const createTrainingBlock = asyncHandler(async (req, res) => {
  const { block } = req.body;

  const newBlock = await TrainingBlock.create({
    user: req.user.id,
    block,
    weeks: [],
  });

  res.json(newBlock);
});

// @desc    Delete a Training Block
// @route   DELETE /api/trainingblocks/:blockId
// @access  Private
const deleteTrainingBlock = asyncHandler(async (req, res) => {
  const block = await TrainingBlock.findById({ _id: req.params.blockId });

  if (!block) {
    res.status(401);
    throw new Error("Training Block Not Found");
  }

  await block.remove();

  res.json(req.params.blockId);

  res.send(`Delete block ${req.params.blockId}`);
});

module.exports = {
  getTrainingBlocks,
  createTrainingBlock,
  deleteTrainingBlock,
};
