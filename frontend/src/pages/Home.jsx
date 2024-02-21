import React, { useEffect, useState } from "react";
import WorkoutDetail from "../components/WorkoutDetail";

export default function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response?.json();

      if (response.ok) {
        setWorkouts(json);
        console.log(json, "json");
      }
    };

    fetchWorkout();
  }, []);
  return (
    <div className="px-4 py-4 w-full sm:w-[90%] mx-auto">
      {workouts &&
        workouts?.map((workout) => (
          <WorkoutDetail key={workout._id} workout={workout} />
        ))}
    </div>
  );
}
