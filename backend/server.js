require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts.js");
const mongoose = require("mongoose");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    // listen app on port 3000
    app.listen(process.env.PORT, () => [
      console.log(`listening on port ${process.env.PORT}`),
    ]);
  })
  .catch((err) => {
    console.log(err, "err");
  });
