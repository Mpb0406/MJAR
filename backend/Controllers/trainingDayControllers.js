const asyncHandler = require("express-async-handler");
const TrainingDay = require("../Models/trainingDayModel");
const User = require("../Models/userModel");

// @desc    Get All User Training Days
// @route   GET /api/training/mytraining
// @access  Private
const getMyTraining = asyncHandler(async (req, res) => {
  const training = await TrainingDay.find({ user: req.user.id });
  res.json(training);
});

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

// @desc    Add New Lift to Training Day
// @route   PUT /api/training/:id
// @access  Private
const updateTrainingDay = asyncHandler(async (req, res) => {
  // Get Form Data
  const { exercise } = req.body;

  // Build out object
  const lift = {
    exercise,
    sets: [],
  };

  try {
    //Find Training Day
    const day = await TrainingDay.findOne({ _id: req.params.id });
    day.lifts.push(lift);
    await day.save();
    res.json(day);
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

// @desc    Delete Training Day
// @route   DELETE /api/training/:id
// @access  Private
const deleteTrainingDay = asyncHandler(async (req, res) => {
  const trainingDay = await TrainingDay.findById(req.params.id);

  // Check if Training Day exists by ID
  if (!trainingDay) {
    res.status(401);
    throw new Error("Training Day Not Found");
  }

  // Check for User
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User Not Found");
  }

  // Check if Logged User Matches Training Day User
  if (trainingDay.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  await trainingDay.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  newTrainingDay,
  getMyTraining,
  updateTrainingDay,
  deleteTrainingDay,
};
