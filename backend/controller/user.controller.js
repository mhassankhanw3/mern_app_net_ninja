const Login = async (req, res) => {
  res.json({ msg: "Login Successfully!" });
};
const SignUp = async (req, res) => {
  res.json({ msg: "SignUp Successfully!" });
};

module.exports = {
  Login,
  SignUp,
};
