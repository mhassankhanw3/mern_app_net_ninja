const express = require("express");
const User = require("../models/user.model.js");
const { Login, SignUp } = require("../controller/user.controller.js");

const router = express.Router();

router.post("/login", Login);
router.post("/signup", SignUp);

module.exports = router;
