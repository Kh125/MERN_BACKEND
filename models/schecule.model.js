const { Schema, model } = require("mongoose");

const scheduleSchema = new Schema({
  Year: {
    type: Number,
  },
  Major: {
    type: String,
  },
  Day: {
    type: String,
  },
  Schedule: [
    {
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
    },
  ],
});

module.exports = model("Schedules", scheduleSchema);
