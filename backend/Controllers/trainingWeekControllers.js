const asyncHandler = require("express-async-handler");
const TrainingWeek = require("../Models/trainingWeekModel");
const TrainingBlock = require("../Models/trainingBlockModel");
const User = require("../Models/userModel");

// @desc    Get Training Weeks
// @route   Get /api/trainingweeks/mytraining
// @access  Private
const getTrainingWeeks = asyncHandler(async (req, res) => {
  const block = await TrainingBlock.findById({ _id: req.params.blockId });

  if (!block) {
    res.status(400);
    throw new Error("Block Not Found");
  }

  // Find All Weeks with Object Id's Found in Weeks Array for Block
  const weeks = await TrainingWeek.find({ _id: { $in: block.weeks } });

  res.json(weeks);
});

// @desc    Create New Training Week
// @route   POST /api/trainingweeks/:blockId
// @access  Private
const createWeek = asyncHandler(async (req, res) => {
  const { week } = req.body;

  // Get Training Block
  const block = await TrainingBlock.findOne({ _id: req.params.blockId });

  //Check if Block Exists
  if (!block) {
    res.status(400);
    throw new Error("No Training Block Found");
  }

  const trainingWeek = await TrainingWeek.create({
    user: req.user.id,
    week,
    trainingDays: [],
  });

  block.weeks.push(trainingWeek);

  block.save();

  const allWeeks = await TrainingWeek.find({ user: req.user.id });

  // Get all weeks in specific training block
  const weeks = await TrainingWeek.find({ _id: { $in: block.weeks } });

  res.json(weeks);
});

// @desc    Delete A Training Week
// @route   DELETE /api/trainingweeks/:weekId
// @access  Private
const deleteWeek = asyncHandler(async (req, res) => {
  const trainingWeek = await TrainingWeek.findById({ _id: req.params.weekId });
  const block = await TrainingBlock.findById(req.params.blockId);

  // Check for Training Block
  if (!block) {
    res.status(400);
    throw new Error("No Training Block Found");
  }

  // Check for week
  if (!trainingWeek) {
    res.status(401);
    throw new Error("Week not found");
  }

  // Check for User
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  const updatedWeeks = block.weeks.filter(
    (week) => week.toString() !== req.params.weekId
  );

  block.weeks = updatedWeeks;
  block.save();

  await trainingWeek.remove();

  res.json(req.params.blockId);
});

module.exports = {
  getTrainingWeeks,
  createWeek,
  deleteWeek,
};
