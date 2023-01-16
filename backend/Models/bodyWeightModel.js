const mongoose = require("mongoose");

const bodyWeightSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    bodyWeight: {
      weight: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BodyWeight", bodyWeightSchema);
