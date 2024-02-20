const express = require("express");
const Workout = require("../models/workout.model.js");
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
} = require("../controller/workout.controller.js");

const router = express.Router();

router.get("/", getWorkouts);

// single route
router.get("/:id", getSingleWorkout);

// post a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "delete A NEW wORKOUT!" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "updated A NEW wORKOUT!" });
});

module.exports = router;
