import React, { useEffect, useState } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function Home() {
  // const [workouts, setWorkouts] = useState(null);
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch("/api/workouts/");
      const json = await response?.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
        console.log(json, "json");
      }
    };

    fetchWorkout();
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">
          Fitness Tracker
        </h1>
        {workouts && workouts?.length > 0 ? (
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-6 lg:mb-0">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                  Recent Workouts
                </h2>
                <ul className="space-y-4">
                  {workouts &&
                    workouts.map((workout) => (
                      <div key={workout._id}>
                        <WorkoutDetail workout={workout} />
                      </div>
                    ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <WorkoutForm />
            </div>
          </div>
        ) : (
          <div className="sm:w-[80%] mx-auto w-full">
            <WorkoutForm />
          </div>
        )}
      </div>
    </div>
  );
}
