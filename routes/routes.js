const user = require("./user.route");
const schedule = require("./schedules.route");

module.exports = (router) => {
  user(router);
  schedule(router);
};
