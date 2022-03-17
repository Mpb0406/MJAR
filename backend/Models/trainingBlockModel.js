const mongoose = require("mongoose");

const trainingBlockSchema = mongoose.Schema({
  block: {
    type: String,
    required: true,
  },
  weeks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TrainingWeek",
  },
});

module.exports = mongoose.model("TrainingBlock", trainingBlockSchema);
