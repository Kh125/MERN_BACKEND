const verifyToken = require("../auth/validateToken");
const {
  createUser,
  loginUser,
  fillAcademicInfo,
  getUser,
  logout,
} = require("../controllers/user.controller");

module.exports = (router) => {
  router.route("/register").post(createUser);
  router.route("/login").post(loginUser);
  router.route("/updateinfo").post(verifyToken, fillAcademicInfo);
  router.route("/getcurrentuser").get(verifyToken, getUser);
  router.route("/logout").post(logout);
};
