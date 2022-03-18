const asyncHandler = require("express-async-handler");
const TrainingWeek = require("../Models/trainingWeekModel");
const User = require("../Models/userModel");

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

module.exports = {
  createWeek,
};
