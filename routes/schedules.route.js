const verifyToken = require("../auth/validateToken");
const {getSchedule, moodleWeeklySchedule} = require("../controllers/schedule.controller");

module.exports = (router) => {
  router.route("/getSchedules").get(verifyToken, getSchedule);
  router.route("/getMoodleWeeklySchedule").get(moodleWeeklySchedule);
};
