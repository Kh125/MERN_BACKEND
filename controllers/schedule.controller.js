const Schedule = require("../models/schecule.model");
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

const moodleWeeklySchedule = async (req, res) => {
  const url = `http://34.129.49.110/webservice/rest/server.php?wstoken=${process.env.WSTOKEN}&wsfunction=${req.body.function}&moodlewsrestformat=json`;

  try {
    const response = await fetch(url, {
      method:"GET"
    });
    const json = await response.json();
    res.status(200).send(json)
  } catch (err) {
    res.status(400).send(err)
  }

}

const getSchedule = async (req, res) => {
  const { user, major, academicYear } = res.user;

  try {
    const schedules = await Schedule.find({ Major: major, Year: academicYear });
    res.status(200).send(schedules);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { getSchedule, moodleWeeklySchedule };
