const mongoose = require("mongoose");
const Workout = require("../models/workout.model");

// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  res.status(200).json(workouts);
};

// get a single workout
const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Workout" });
  }

  const workout = await Workout.findById(id);
  if (!workout) {
    return;
  }
  return res.status(200).json(workout);
};

// create a new workout

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  res.json({ mssg: "post A NEW wORKOUT!" });
};

// Update a workout

// delete a workout

module.exports = { createWorkout, getWorkouts, getSingleWorkout };
