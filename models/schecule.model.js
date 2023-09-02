const { Schema, model } = require("mongoose");

const scheduleEntrySchema = new Schema({
  Period: {
    type: Number,
  },
  SubjectID: {
    type: String,
  },
  Subject: {
    type: String,
  },
  Lecture: {
    type: Boolean,
  },
  TeacherPhNo: {
    type: String,
  },
  Location: {
    type: String,
  },
  Teacher: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
});

const scheduleSchema = new Schema({
  Year: {
    type: Number,
  },
  Major: {
    type: String,
  },
  Schedule: {
    Monday: [scheduleEntrySchema],
    Tuesday: [scheduleEntrySchema],
    Wednesday: [scheduleEntrySchema],
    Thursday: [scheduleEntrySchema],
    Friday: [scheduleEntrySchema],
  },
});

module.exports = model("Schedules", scheduleSchema);
