const asyncHandler = require("express-async-handler");
const BodyWeight = require("../Models/bodyWeightModel");

// @desc    Get All User Bodyweight Logs
// @route   GET /api/weightlog/myweightlog
// @access  Private
const getWeightLogs = asyncHandler(async (req, res) => {
  const weightLogs = await BodyWeight.find({ user: req.user.id });

  res.json(weightLogs);
});

// @desc    Post New BoyWeight Log
// @route   POST /api/weightlog/
// @access  Private
const newWeightLog = asyncHandler(async (req, res) => {
  const { bodyWeight, notes } = req.body;

  await BodyWeight.create({
    user: req.user.id,
    bodyWeight,
    notes,
  });

  const allLogs = await BodyWeight.find({ user: req.user.id });

  res.json(allLogs);
});

module.exports = {
  getWeightLogs,
  newWeightLog,
};
