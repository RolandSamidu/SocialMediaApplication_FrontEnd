import React, { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../images/workoutBck.jpg";
import { useActiveTab } from "../context/ActiveTabContext";


import chestImg from "../images/chestImg.png";
import backImg from "../images/backImage.jpg";
import armsImg from "../images/armsImage.jpg";
import legsImg from "../images/legsImage.png";
import { se } from "date-fns/locale";
import toast from "react-hot-toast";
import axios from "axios";

const workoutTypes = [
  { name: "Chest", image: chestImg },
  { name: "Back", image: backImg },
  { name: "Arms", image: armsImg },
  { name: "Legs", image: legsImg },
];

const CreateWorkoutPlan = () => {
  const [selectedWorkout, setSelectedWorkout] = useState({
    selectedWorkouts: [],
  });
  const [exercises, setExercises] = useState("");
  const [sets, setSets] = useState("");
  const [routine, setRoutine] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const { setActiveTab } = useActiveTab();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!selectedWorkout || !exercises || !sets || !routine || !repetitions || !description) {
      return toast.error("Please fill all the fields");
    }

    const workoutData = {
      sets,
      routine,
      date,
      exercises,
      repetitions,
      description,
      workoutPlanName: selectedWorkout,
    };

    const res = await axios.post(
      "http://localhost:8080/workoutPlans",
      workoutData
    );
    if (res.status === 201) {
      toast.success("Workout Plan created successfully");
      navigate("/");
      setActiveTab("tab3");
    } else {
      toast.error("Failed to create workout plan");
    }
    
  };

  const navigate = useNavigate();

  const goToWorkoutStatus = () => {
    navigate("/"); 
  };

  return (
    <Layout>
      <div
        className="min-h-screen p-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
      
        <form
          onSubmit={handleSubmit}
          className="max-w-auto mx-auto my-6 bg-white p-12 rounded-lg shadow-md"
        >
          <h1 className="mb-4 text-3xl font-semibold text-center text-indigo-600">
            Select Workout Plan
          </h1>
          <div className="text-center mb-4">Please select your Routine</div>
          <div className="space-y-8">
            <div className="mb-4">
              <div className="flex flex-wrap justify-center items-center">
                {workoutTypes.map((workout, index) => (
                  <div key={index} className="p-4">
                    <div
                      className={`cursor-pointer rounded-lg overflow-hidden transition-transform transform ${
                        selectedWorkout === workout.name
                          ? "ring-4 ring-indigo-500"
                          : ""
                      }`}
                      onClick={() => setSelectedWorkout(workout.name)}
                    >
                      <img
                        src={workout.image}
                        alt={workout.name}
                        className="w-36 h-24 object-cover"
                      />
                      <div
                        className={`p-2 text-center ${
                          selectedWorkout === workout.name
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-gray-800"
                        }`}
                      >
                        {workout.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="routine"
                  className="block text-sm font-medium text-gray-700 flex items-center"
                >
                  Routine Name
                </label>
                <input
                  type="text"
                  id="routine"
                  value={routine}
                  onChange={(e) => setRoutine(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter routine name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exercises"
                  className="block text-sm font-medium text-gray-700 flex items-center"
                >
                  Excercise Name
                </label>
                <input
                  type="text"
                  id="exercises"
                  value={exercises}
                  onChange={(e) => setExercises(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter exercises name"
                />
              </div>
              <label
                htmlFor="sets"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                Sets Count
              </label>
              <input
                type="number"
                id="sets"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter sets count"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="repetitions"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                Repetitions
              </label>
              <input
                type="number"
                id="repetitions"
                value={repetitions}
                onChange={(e) => setRepetitions(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter repetitions count"
              />
            </div>
            <div className="relative max-w-sm">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Select Date
              </label>
              <input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description of your workout
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Describe your workout achievements..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-sm font-medium text-white bg-black rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Workout Status
          </button>
          <button
            onClick={goToWorkoutStatus}
            className="w-full px-4 mt-2 py-2 text-sm font-medium text-black bg-transparent rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateWorkoutPlan;
