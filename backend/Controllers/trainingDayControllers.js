const asyncHandler = require("express-async-handler");
const TrainingDay = require("../Models/trainingDayModel");
const User = require("../Models/userModel");

// @desc    Create New Training Day
// @route   POST /api/training/
// @access  Private
const newTrainingDay = asyncHandler(async (req, res) => {
  if (!req.body.day) {
    res.status(400);
    throw new Error("Please Add Day");
  }

  const trainingDay = await TrainingDay.create({
    user: req.user.id,
    day: req.body.day,
    lifts: [],
  });

  res.status(201).json(trainingDay);
});

// @desc    Get All User Training Days
// @route   GET /api/training/mytraining
// @access  Private
const getMyTraining = asyncHandler(async (req, res) => {
  const training = await TrainingDay.find({ user: req.user.id });
  res.json(training);
});

module.exports = { newTrainingDay, getMyTraining };
