import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import WorkoutForm from "./WorkoutForm";
import EditWorkoutForm from "./EditWorkoutForm";

export default function WorkoutDetail({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/${workout._id}`, {
      method: "DELETE",
    });

    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  return (
    <li className="border-b py-4">
      {isEditing ? (
        <EditWorkoutForm workout={workout} setIsEditing={setIsEditing} />
      ) : (
        <>
          <h3 className="text-lg font-medium text-gray-700">
            {workout?.title}
          </h3>
          <p className="text-sm text-gray-500">Load: {workout?.load}kg</p>
          <p className="text-sm text-gray-500">Reps: {workout?.reps}</p>
          <p className="text-sm text-gray-400">{workout?.createdAt}</p>
          <div className="flex">
            <button
              onClick={handleEdit}
              className="py-2 px-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-100 text-sm my-2 mr-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="py-2 px-3 rounded-lg border border-red-600 text-red-600 hover:bg-red-100 text-sm my-2"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}
