const Schedule = require("../models/schecule.model");

const getSchedule = async (req, res) => {
  const { user, major, academicYear } = res.user;

  try {
    const schedules = await Schedule.find({ Major: major, Year: academicYear });
    res.status(200).send(schedules);
  } catch (e) {
    res.status(400).send(e);
  }
};
module.exports = getSchedule;
