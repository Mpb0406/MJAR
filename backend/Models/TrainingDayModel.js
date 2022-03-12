const mongoose = require("mongoose");

const trainingDaySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    day: {
      type: String,
      required: true,
    },
    lifts: [
      {
        exercise: {
          type: String,
        },
        sets: [
          {
            reps: {
              type: Number,
            },
            rpe: {
              type: Number,
            },
            setType: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TrainingDay", trainingDaySchema);
