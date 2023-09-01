const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = await req.cookies.authToken;

  if (!token) return res.status(400).send({ user: null });

  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    res.user = user;
    next();
  } catch {
    res.status(400).send({ error: "Invalid User" });
  }
};

module.exports = verifyToken;
