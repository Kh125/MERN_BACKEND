const {
  getSampleData,
  createSampleData,
  getSingleSampleData,
  deleteSampleData,
  updateSampleData,
} = require("../controllers/sampleController");

module.exports = (router) => {
  router.route("/").get(getSampleData);

  router.route("/add").post(createSampleData);
};
