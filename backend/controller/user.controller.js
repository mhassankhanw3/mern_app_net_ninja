const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const Login = async (req, res) => {
  res.json({ msg: "Login Successfully!" });
};
const SignUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User?.signup(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  Login,
  SignUp,
};
