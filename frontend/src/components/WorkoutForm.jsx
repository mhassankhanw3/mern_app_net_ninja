import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const { dispatch } = useWorkoutsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called!");

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setReps("");
      setLoad("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      console.log("New Wrokout Added!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Add a New Workout
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="exercise-title"
          >
            Exercise Title:
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`flex h-10 w-full rounded-md border border-input hover:border-blue-500 ${
              emptyFields.includes("title")
                ? "border-red-600 hover:border-red-600"
                : ""
            } bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
            id="exercise-title"
            placeholder="Exercise title"
            type="text"
          />
          {emptyFields.includes("title") && (
            <span className="text-xs font-medium text-red-500">
              Title is Required!
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="load"
          >
            Load (in kg):
          </label>
          <input
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className={`flex h-10 w-full rounded-md border border-input hover:border-blue-500 ${
              emptyFields.includes("load")
                ? "border-red-600 hover:border-red-600"
                : ""
            } bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
            id="load"
            placeholder="Load in kg"
            type="number"
          />
          {emptyFields.includes("load") && (
            <span className="text-xs font-medium text-red-500">
              Load is Required!
            </span>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="reps"
          >
            Reps:
          </label>
          <input
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className={`flex h-10 w-full rounded-md border border-input hover:border-blue-500 ${
              emptyFields.includes("reps")
                ? "border-red-600 hover:border-red-600"
                : ""
            } bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
            id="reps"
            placeholder="Number of reps"
            type="number"
          />
          {emptyFields.includes("reps") && (
            <span className="text-xs font-medium text-red-500">
              Reps is Required!
            </span>
          )}
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 w-full h-10 px-4 py-2"
        >
          Add Workout
        </button>
      </form>
    </div>
  );
}
