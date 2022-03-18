const asyncHandler = require("express-async-handler");
const TrainingWeek = require("../Models/trainingWeekModel");
const User = require("../Models/userModel");

// @desc    Get Training Weeks
// @route   Get /api/trainingweeks/mytraining
// @access  Private
const getTrainingWeeks = asyncHandler(async (req, res) => {
  const weeks = await TrainingWeek.find({ user: req.user.id });

  res.json(weeks);
});

// @desc    Create New Training Week
// @route   POST /api/trainingweeks
// @access  Private
const createWeek = asyncHandler(async (req, res) => {
  const { week } = req.body;

  const trainingWeek = await TrainingWeek.create({
    week,
    trainingDays: [],
  });

  res.json(trainingWeek);
});

// @desc    Delete A Training Week
// @route   DELETE /api/trainingweeks/:weekId
// @access  Private
const deleteWeek = asyncHandler(async (req, res) => {
  const trainingWeek = await TrainingWeek.findById({ _id: req.params.weekId });

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

  await trainingWeek.remove();

  res.send(req.params.weekId);
});

module.exports = {
  getTrainingWeeks,
  createWeek,
  deleteWeek,
};
