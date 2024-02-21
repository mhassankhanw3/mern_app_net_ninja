const express = require("express");
const Workout = require("../models/workout.model.js");
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controller/workout.controller.js");

const router = express.Router();

router.get("/", getWorkouts);

// single route
router.get("/:id", getSingleWorkout);

// post a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", deleteWorkout);

// update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
