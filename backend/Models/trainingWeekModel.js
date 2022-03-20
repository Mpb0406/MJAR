const mongoose = require("mongoose");

const trainingWeekSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TrainingWeek", trainingWeekSchema);
