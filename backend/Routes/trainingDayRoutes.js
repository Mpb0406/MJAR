const express = require("express");
const router = express.Router();
const {
  newTrainingDay,
  getMyTraining,
  updateTrainingDay,
  deleteTrainingDay,
  addNewSet,
  updateSet,
  deleteSet,
  deleteLift,
} = require("../Controllers/TrainingDayControllers");
const { protect } = require("../Middleware/authMiddleware");

router.post("/:weekId", protect, newTrainingDay);

router.get("/:weekId/mytraining", protect, getMyTraining);

router.put("/:weekId/:dayId", protect, updateTrainingDay);

router.delete("/:weekId/:dayId", protect, deleteTrainingDay);

router.post("/:weekId/:dayId/:liftId", protect, addNewSet);

router.put("/:dayId/:liftId/:setId", protect, updateSet);

router.delete("/:weekId/:dayId/:liftId/:setId", protect, deleteSet);

router.delete("/:weekId/:dayId/:liftId", protect, deleteLift);

module.exports = router;
