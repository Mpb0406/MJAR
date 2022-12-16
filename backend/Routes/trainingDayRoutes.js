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
  getSelectDays,
} = require("../Controllers/trainingDayControllers");
const { protect } = require("../Middleware/authMiddleware");

router.post("/:blockId/:weekId", protect, newTrainingDay);

router.get("/:weekId/mytraining", protect, getMyTraining);

router.put("/:weekId/:dayId", protect, updateTrainingDay);

router.delete("/:weekId/:dayId", protect, deleteTrainingDay);

router.post("/:weekId/:dayId/:liftId", protect, addNewSet);

router.put("/:dayId/:liftId/:setId", protect, updateSet);

router.delete("/:weekId/:dayId/:liftId/:setId", protect, deleteSet);

router.delete("/:weekId/:dayId/:liftId", protect, deleteLift);

router.post("/:blockId", protect, getSelectDays);

module.exports = router;
