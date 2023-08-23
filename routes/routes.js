const user = require("./user.route");
const data = require("./sampleData.route");

module.exports = (router) => {
  user(router);
  data(router);
};
