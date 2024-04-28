import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';

const WorkoutStatus = () => {

    // Dummy data, replace with actual data retrieval logic
    const workoutStatuses = [
      {
        date: '2022-07-01',
        distance: '5 km',
        pushups: '30',
        weight: '50 kg',
        description: 'Had a great run in the park and did some push-ups after.',
      },
      {
        date: '2022-07-01',
        distance: '5 km',
        pushups: '30',
        weight: '50 kg',
        description: 'Had a great run in the park and did some push-ups after.',
      },
      {
        date: '2022-07-01',
        distance: '5 km',
        pushups: '30',
        weight: '50 kg',
        description: 'Had a great run in the park and did some push-ups after.',
      },
      
    ];
      // Add more workout statuses here
      const navigate = useNavigate();

      // Function to handle click event
      const goToWorkoutStatus = () => {
        navigate('/CreateWorkoutStatus'); // Use the route you want to navigate to
      };
  
      return (
        <Layout>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl text-center font-semibold mb-4">
                Workout Statuses
              </h1>
              <button
                onClick={goToWorkoutStatus}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Create Workout Status
              </button>
            </div>
            
            {/* Workout Status Cards */}
            <div className="space-y-4">
            {workoutStatuses.map((status, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">
                  Workout on {status.date}
                </h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Distance run: {status.distance}</li>
                  <li>Number of push-ups: {status.pushups}</li>
                  <li>Weight lifted: {status.weight}</li>
                  <li>Description: {status.description}</li>
                </ul>
              </div>
            ))}
            </div>
          </div>
        </Layout>
      );
    };
  

export default WorkoutStatus;