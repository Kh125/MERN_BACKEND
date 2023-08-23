const User = require("../models/user.model");
const {
  createUserValidation,
  loginValidation,
} = require("../validation/user.validation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  //validate the input data
  const { error } = createUserValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  //hash the password
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

  //check email already exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send({ error: "Email Already Exist" });
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
    role: req.body.role,
  });

  try {
    await user.save();
    return res.status(200).send("registered successfully");
  } catch {
    return res.status(400);
  }
};

const loginUser = async (req, res) => {
  const { error } = loginValidation(req.body);

  if (error) return res.status(400).send({ error: error.details[0].message });

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ error: "User Not Found!" });

  const passwordMatch = await bcrypt.compare(req.body.password, user.password);
  if (!passwordMatch) res.status(400).send({ error: "Incorrect Password" });

  if (passwordMatch) {
    const token = jwt.sign({ user: user._id }, process.env.TOKEN_SECRET);

    return res
      .cookie("authToken", token, { httpOnly: true })
      .status(200)
      .send("Logged In Successfully");
  }
};
module.exports = { createUser, loginUser };
