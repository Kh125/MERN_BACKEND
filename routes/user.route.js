const verifyToken = require("../auth/validateToken");
const {
  createUser,
  loginUser,
  fillAcademicInfo,
} = require("../controllers/user.controller");

module.exports = (router) => {
  router.route("/register").post(createUser);
  router.route("/login").post(loginUser);
  router.route("/updateinfo").post(verifyToken, fillAcademicInfo);
};
