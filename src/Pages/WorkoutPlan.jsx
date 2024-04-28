import React from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

// Mock data - replace this with your fetched data from the server or state management
const mockWorkoutPlans = [
  {
    routineName: 'Upper Body Blast',
    exerciseName: 'Pull Up',
    setsCount: '5',
    repetitions: '10',
    date: '2022-07-01',
    description: 'Focused on upper body strength with minimal equipment.'
  },
  // Add more mock workout plans or fetched data here
];

const WorkoutPlan = () => {

  const navigate = useNavigate();

  // Function to handle click event
  const goToWorkoutPlan = () => {
    navigate('/CreateWorkoutPlan'); // Use the route you want to navigate to
  };

  return (
    // <Layout>
      <div className="p-4">
      <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Workout Plan Summary</h1>
          <button
            onClick={goToWorkoutPlan}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Create New Workout Plan
          </button>
        </div>
        <div className="space-y-4">
          {mockWorkoutPlans.map((plan, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{plan.routineName}</h2>
              <p className="font-medium">Exercise: {plan.exerciseName}</p>
              <p className="text-sm">Sets: {plan.setsCount}</p>
              <p className="text-sm">Repetitions: {plan.repetitions}</p>
              <p className="text-sm">Date: {plan.date}</p>
              <p className="text-sm italic">"{plan.description}"</p>
            </div>
          ))}
        </div>
      </div>
    // </Layout>
  );
};


export default WorkoutPlan;
