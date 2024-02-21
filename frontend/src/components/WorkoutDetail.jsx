import React from "react";

export default function WorkoutDetail({ workout }) {
  return (
    <div className="bg-transparent hover:bg-white my-2 py-4 px-6 rounded-md border-[0.2px] border-neutral-200 hover:border-neutral-200 transition-all w-[60%]">
      <h3 className="text-blue-500 font-bold text-xl mb-4">{workout.title}</h3>
      <p className="mt-1">
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps: </strong>
        {workout.reps}
      </p>
      <p className="text-neutral-400 text-sm">{workout.createdAt}</p>
    </div>
  );
}
