import React, { useState } from 'react';
import Layout from '../components/Layout';
import backgroundImg from '../images/statusBck.jpg';
import { useNavigate } from 'react-router-dom';


const CreateWorkouStatus = () => {
    const [distance, setDistance] = useState('');
    const [pushups, setPushups] = useState('');
    const [weight, setWeight] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle the form submission
        console.log({ distance, pushups, weight, description });
        // Reset form or provide feedback to user
    };
    const navigate = useNavigate();

    // Function to handle click event
    const goToWorkoutStatus = () => {
      navigate('/WorkoutStatus'); // Use the route you want to navigate to
    };


    return (
        <Layout>
            <div className="min-h-screen p-4 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
              
                <h1 className="mb-4 text-3xl font-semibold text-center text-indigo-600">
                    Workout Status Tracker
                </h1>
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="distance" className="block text-sm font-medium text-gray-700">
                            Distance ran (in km)
                        </label>
                        <input
                            type="number"
                            id="distance"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter distance"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pushups" className="block text-sm font-medium text-gray-700">
                            Number of push-ups
                        </label>
                        <input
                            type="number"
                            id="pushups"
                            value={pushups}
                            onChange={(e) => setPushups(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter push-ups count"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                            Weight lifted (in kg)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter weight"
                        />
                    </div>
                    <div className="relative max-w-sm">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Select Date
                        </label>
                        <input 
                            type="date" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Select date"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
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
                    <button type="submit" className="w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Submit Workout Status
                    </button>
                    <button 
                    onClick={goToWorkoutStatus} 
                    className="w-full px-4 mt-2 py-2 text-sm font-medium text-black bg-transparent rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Cancel
                    </button>
                </form>
            </div>
        </Layout>
    );
};


export default CreateWorkouStatus;
