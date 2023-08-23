require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const router = express.Router();

const routes = require("./routes/routes");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

routes(router);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to App" });
});

app.use("/api/routes", router);

mongoose
  .connect(process.env.MONGO_URI_DEV)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listing on port 4000!!!");
    });
  })
  .catch((e) => {
    console.log("Can't connect to MongoDB!", e);
  });
