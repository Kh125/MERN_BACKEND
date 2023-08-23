const { createUser, loginUser } = require("../controllers/user.controller");

module.exports = (router) => {
  router.route("/register").post(createUser);
  router.route("/login").post(loginUser);
};
