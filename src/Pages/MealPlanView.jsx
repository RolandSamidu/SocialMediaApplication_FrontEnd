import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const MealPlanView = () => {
  const { state } = useLocation();
  const { mealPlan } = state;

  return (
    <Layout>
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{mealPlan.mealPlanName}</h2>
          {mealPlan.image && (
            <div className="flex justify-center">
            <img src={mealPlan.image} alt="Meal Plan" className="w-full h-50 rounded-lg mb-4"/>
        </div>
          )}
          <p className="text-xs text-gray-700 mb-4">{mealPlan.mealDescription}</p>

          

          <h3 className="text-md font-bold mb-2">Ingredients</h3>
          <ul className="list-disc  pl-5 mb-4">
            {mealPlan.ingredients.map((ingredient, index) => (
              <li key={index} className="text-xs" >{ingredient.name} - {ingredient.quantity} {ingredient.unit}</li>
            ))}
          </ul>

          <h3 className="text-md font-bold mb-2">Cooking Instructions</h3>
          <p className="text-xs whitespace-pre-wrap mb-2">{mealPlan.cookingInstructions}</p>

          <h3 className="text-md font-bold mb-2">Nutritional Information</h3>
          <div className="text-xs grid grid-cols-2 gap-2 mb-4">
            <p>Calories: {mealPlan.calories}</p>
            <p>Protein: {mealPlan.protein} grams</p>
            <p>Carbs: {mealPlan.carbs} grams</p>
            <p>Fat: {mealPlan.fat} grams</p>
          </div>

          <h3 className="text-md font-bold">Portion Sizes</h3>
          <p className='text-xs mb-2'>{mealPlan.servingSize} {mealPlan.servingUnit}</p>

          <h3 className="text-md font-bold ">Dietary Preferences</h3>
          <p className='text-xs mb-2'>{mealPlan.dietaryPreferences}</p>

          <h3 className="text-md font-bold">Meal Type</h3>
          <p className='text-xs mb-2'>{mealPlan.mealType}</p>

          <h3 className="text-md font-bold mb-2">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {mealPlan.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-blue-200 text-blue-800 px-4 py-1 rounded-full">{tag.trim()}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default MealPlanView;
