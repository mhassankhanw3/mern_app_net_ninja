const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required!" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error, "error");
    res.status(401).json({ error: "Request is not Authorized!" });
  }
};

module.exports = requireAuth;
