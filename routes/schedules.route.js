const verifyToken = require("../auth/validateToken");
const getSchedule = require("../controllers/schedule.controller");

module.exports = (router) => {
  router.route("/getSchedules").get(verifyToken, getSchedule);
};
