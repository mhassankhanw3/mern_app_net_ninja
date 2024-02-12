require("dotenv").config();
const express = require("express");

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "app is working" });
});

// listen app on port 3000
app.listen(process.env.PORT, () => [
  console.log(`listning on port ${process.env.PORT}`),
]);
