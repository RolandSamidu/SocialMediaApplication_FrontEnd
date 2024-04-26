import React, { useState } from 'react';
import Layout from '../components/Layout';
import backgroundImg from '../images/statusBck.jpg';


const WorkoutStatus = () => {
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
                </form>
            </div>
        </Layout>
    );
};

export default WorkoutStatus;