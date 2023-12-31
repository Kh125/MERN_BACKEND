const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 6,
      max: 255,
    },
    email: {
      type: String,
      required: true,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 255,
    },
    studentId: {
      type: String,
    },
    academicYear: {
      type: Number,
    },
    major: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);