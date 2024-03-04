import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutForm from "./WorkoutForm";
import EditWorkoutForm from "./EditWorkoutForm";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
export default function WorkoutDetail({ workout }) {
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toLocaleString();
  };

  return (
    <li className="border-b py-4 flex items-start justify-between">
      <div>
        <h3 className="text-lg font-medium text-gray-700">{workout?.title}</h3>
        <p className="text-sm text-gray-500 mt-1 mb-0">
          <span className="text-gray-600 font-medium">Load:</span>{" "}
          {workout?.load}
          kg
        </p>
        <p className="text-sm text-gray-500 mt-0 mb-2">
          <span className="text-gray-600 font-medium">Reps:</span>{" "}
          {workout?.reps}
        </p>
        <p className="text-xs text-blue-600">
          {formatDistanceToNow(new Date(workout?.createdAt), {
            addSuffix: true,
          })}
          {/* {formatDateTime(workout?.createdAt)} */}
        </p>
      </div>
      <div className="flex">
        <button
          onClick={handleDelete}
          className="py-2 px-3 rounded-lg border border-red-600 text-red-600 hover:bg-red-100 text-sm "
        >
          Delete
        </button>
      </div>
    </li>
  );
}
