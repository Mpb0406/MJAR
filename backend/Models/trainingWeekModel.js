const mongoose = require("mongoose");

const trainingWeekSchema = mongoose.Schema({
  week: {
    type: String,
    required: true,
  },
  trainingDays: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TrainingDay",
    },
  ],
});

module.exports = mongoose.model("TrainingWeek", trainingWeekSchema);
