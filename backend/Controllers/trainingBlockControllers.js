const asyncHandler = require("express-async-handler");
const TrainingDay = require("../Models/TrainingDayModel");
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
  const { block, microBlock } = req.body;

  const newBlock = await TrainingBlock.create({
    user: req.user.id,
    block,
    microBlock,
    weeks: [],
  });

  const allBlocks = await TrainingBlock.find({ user: req.user.id });

  res.json(allBlocks);
});

// @desc    Add Lift to Training Block
// @route   PUT /api/trainingblocks/:blockid
// @access  Private
const addBlockLift = asyncHandler(async (req, res) => {
  const block = await TrainingBlock.findById({ _id: req.params.blockId });

  const { lifts } = req.body;

  block.lifts = lifts;
  await block.save();

  const allBlocks = await TrainingBlock.find({ user: req.user.id });

  res.json(allBlocks);
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

  // Loop Through Weeks Array and Deletge Each Day Within The Week Then The Week Itself
  for (i = 0; i < block.weeks.length; i++) {
    let week = await TrainingWeek.findById({ _id: block.weeks[i] });

    for (j = 0; j < week.trainingDays.length; j++) {
      await TrainingDay.deleteMany({ _id: { $in: week.trainingDays } });
    }

    await week.remove();
  }

  await block.remove();

  // Get All Blocks by User to Return
  const allBlocks = await TrainingBlock.find({ user: req.user.id });

  res.json(allBlocks);
});

module.exports = {
  getTrainingBlocks,
  createTrainingBlock,
  addBlockLift,
  deleteTrainingBlock,
};
