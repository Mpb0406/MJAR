const mongoose = require("mongoose");

const trainingBlockSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    block: {
      type: String,
      required: true,
    },
    weeks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TrainingWeek",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("TrainingBlock", trainingBlockSchema);
