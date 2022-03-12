const asyncHandler = require("express-async-handler");
const TrainingDay = require("../Models/trainingDayModel");

const newTrainingDay = asyncHandler(async (req, res) => {
  res.send("New Training Day");
});

module.exports = { newTrainingDay };
