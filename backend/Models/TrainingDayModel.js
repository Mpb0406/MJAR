const mongoose = require("mongoose");

const trainingDaySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: User,
  },
  day: {
    day: {
      type: Number,
      required: true,
    },
    lift: [
      {
        exercise: {
          type: String,
          required: true,
        },
        sets: [
          {
            reps: {
              type: Number,
              required: true,
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
});
