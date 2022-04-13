const asyncHandler = require("express-async-handler");
const TrainingDay = require("../Models/trainingDayModel");
const TrainingWeek = require("../Models/trainingWeekModel");
const User = require("../Models/userModel");

// @desc    Get Training Days By Week
// @route   GET /api/training/mytraining
// @access  Private
const getMyTraining = asyncHandler(async (req, res) => {
  const week = await TrainingWeek.findById({ _id: req.params.weekId });

  if (!week) {
    res.status(400);
    throw new Error("Training Week Not Found");
  }

  // Find All Days with Object Id's Found in trainingDays Array for Week
  const days = await TrainingDay.find({ _id: { $in: week.trainingDays } });

  res.json(days);
});

// @desc    Create New Training Day
// @route   POST /api/training/:weekId
// @access  Private
const newTrainingDay = asyncHandler(async (req, res) => {
  if (!req.body.day) {
    res.status(400);
    throw new Error("Please Add Day");
  }

  // Get Training Week to push day onto
  const week = await TrainingWeek.findOne({ _id: req.params.weekId });

  // Check if Week Exists
  if (!week) {
    res.status(400);
    throw new Error("Training Week Not Found");
  }

  const trainingDay = await TrainingDay.create({
    user: req.user.id,
    day: req.body.day,
    lifts: [],
  });

  week.trainingDays.push(trainingDay);

  week.save();

  // Get all days in specific training week
  const days = await TrainingDay.find({ _id: { $in: week.trainingDays } });

  res.status(201).json(days);
});

// @desc    Delete Training Day
// @route   DELETE /api/training/:id
// @access  Private
const deleteTrainingDay = asyncHandler(async (req, res) => {
  const trainingDay = await TrainingDay.findById(req.params.dayId);
  const week = await TrainingWeek.findById(req.params.weekId);

  // Check if Week Exists
  if (!week) {
    res.status(400);
    throw new Error("Training Week Not Found");
  }

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

  const updatedDays = week.trainingDays.filter(
    (day) => day.toString() !== req.params.dayId
  );

  week.trainingDays = updatedDays;
  week.save();

  await trainingDay.remove();

  res.status(200).send(req.params.dayId);
});

// @desc    Add New Lift to Training Day
// @route   PUT /api/training/:dayId
// @access  Private
const updateTrainingDay = asyncHandler(async (req, res) => {
  // Get Form Data
  const { exercise } = req.body;

  // Get Week from Week ID
  const week = await TrainingWeek.findOne({ _id: req.params.weekId });

  // Build out object
  const liftFields = {
    exercise,
    sets: [],
  };

  try {
    //Find Training Day
    const day = await TrainingDay.findOne({ _id: req.params.dayId });

    // Check if Day Exists
    if (!day) {
      res.status(400);
      throw new Error("Training Day Not Found");
    }

    day.lifts.push(liftFields);
    await day.save();

    // Get all days in specific training week
    const days = await TrainingDay.find({ _id: { $in: week.trainingDays } });

    res.json(days);
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

// @desc    Delete A Lift from a Training Day
// @route   DELETE /api/training/:dayId/:liftId
// @access  Private
const deleteLift = asyncHandler(async (req, res) => {
  // Get Day
  const day = await TrainingDay.findOne({ _id: req.params.dayId });

  // Get Lift
  const updatedLifts = day.lifts.filter(
    (lift) => lift._id.toString() !== req.params.liftId
  );

  day.lifts = updatedLifts;
  await day.save();

  res.send(day);
});

// @desc    Add a Set to a Lift
// @route   PUT /api/training/:dayId/:liftId
// @access  Private
const addNewSet = asyncHandler(async (req, res) => {
  const { weight, reps, rpe, setType } = req.body;

  if (!reps) {
    res.status(400);
    throw new Error("Please Add Reps");
  }

  const setFields = {
    weight,
    reps,
    rpe,
    setType,
  };

  try {
    // Get Training Day
    const day = await TrainingDay.findOne({ _id: req.params.dayId });

    // Get Lift by ID (Exists as req.params.liftId)
    const lift = day.lifts.filter((lift) => lift._id == req.params.liftId)[0];

    lift.sets.push(setFields);
    await day.save();
    res.json({ day });
  } catch (error) {
    console.error(error);
    res.status(400);
  }
});

// @desc    Update a Set
// @route   PUT /api/training/:dayId/:liftId/:setId
// @access  Private
const updateSet = asyncHandler(async (req, res) => {
  const { weight, reps, rpe, setType } = req.body;

  // Get Training Day
  let day = await TrainingDay.findOne({ _id: req.params.dayId });

  // Get Lift
  const lift = day.lifts.filter((lift) => lift._id == req.params.liftId)[0];

  // Get Set to be Updated
  const set = lift.sets.filter(
    (set) => set._id.toString() == req.params.setId
  )[0];

  if (weight) set.weight = weight;
  if (reps) set.reps = reps;
  if (rpe) set.rpe = rpe;
  if (setType) set.setType = setType;

  await day.save();

  res.send(day);
});

// @desc    Delete a Set
// @route   DELETE /api/training/:dayId/:liftId
// @access  Private
const deleteSet = asyncHandler(async (req, res) => {
  // Get Training Day
  const day = await TrainingDay.findOne({ _id: req.params.dayId });

  // Get Lift
  const lift = day.lifts.filter((lift) => lift._id == req.params.liftId)[0];

  //Get Set
  const set = lift.sets.filter(
    (set) => set._id.toString() !== req.params.setId
  );

  lift.sets = set;

  await day.save();

  res.send(set);
});

module.exports = {
  newTrainingDay,
  getMyTraining,
  updateTrainingDay,
  deleteTrainingDay,
  addNewSet,
  updateSet,
  deleteSet,
  deleteLift,
};
