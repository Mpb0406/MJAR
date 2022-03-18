const asyncHandler = require("express-async-handler");
const TrainingDay = require("../Models/trainingDayModel");
const TrainingWeek = require("../Models/trainingWeekModel");
const TrainingBlock = require("../Models/trainingBlockModel");
const User = require("../Models/userModel");

// @desc    Get All User Training Blocks
// @route   GET /api/trainingblocks/mytraining
// @access  Private
const getTrainingBlocks = asyncHandler(async (req, res) => {
  res.send("Get all training Blocks");
});

// @desc    Create New Training Block
// @route   POST /api/trainingblocks
// @access  Private
const createTrainingBlock = asyncHandler(async (req, res) => {
  res.send("Create new training block");
});

// @desc    Delete a Training Block
// @route   DELETE /api/trainingblocks/:blockId
// @access  Private
const deleteTrainingBlock = asyncHandler(async (req, res) => {
  res.send(`Delete block ${req.params.blockId}`);
});

module.exports = {
  getTrainingBlocks,
  createTrainingBlock,
  deleteTrainingBlock,
};
