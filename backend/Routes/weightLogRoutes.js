const express = require("express");
const router = express.Router();
const { protect } = require("../Middleware/authMiddleware");
const {
  getWeightLogs,
  newWeightLog,
} = require("../Controllers/weightLogControllers");

router.get("/myweightlog", protect, getWeightLogs);

router.post("/", protect, newWeightLog);

module.exports = router;
