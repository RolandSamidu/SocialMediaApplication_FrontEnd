import React, { useState } from 'react';
import Layout from '../components/Layout';
import backgroundImg from '../images/mealBck1.jpg';
import { useNavigate } from 'react-router-dom'; 

const MealPlan = () => {
  const [mealPlan, setMealPlan] = useState({
    mealPlanName: '',
    mealDescription: '',
    ingredients: [{ name: '', quantity: '', unit: '' }],
    cookingInstructions: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: '',
    servingSize: '',
    servingUnit: '',
    dietaryPreferences: '',
    mealType: '',
    tags: [],
    privacyOption: 'private',
    sharedUsers: '',
    image: null // State to hold the uploaded image
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMealPlan(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setMealPlan(prevState => ({
        ...prevState,
        image: URL.createObjectURL(e.target.files[0])
      }));
    }
  };

  const removeImage = () => {
    setMealPlan(prevState => ({
      ...prevState,
      image: null
    }));
  };

  const handleSubmit = () => {
    if (!mealPlan.mealPlanName.trim()) {
      alert('Please enter a name for the meal plan.');
      return;
    }
  
    if (!mealPlan.calories || !mealPlan.protein || !mealPlan.carbs || !mealPlan.fat) {
      alert('Please enter all nutritional values.');
      return;
    }
  
    if (!mealPlan.servingSize || !mealPlan.servingUnit.trim()) {
      alert('Please specify the serving size and its unit.');
      return;
    }
  
    if (!mealPlan.dietaryPreferences) {
      alert('Please select a dietary preference.');
      return;
    }
  
    if (!mealPlan.mealType) {
      alert('Please select a meal type.');
      return;
    }
  
    console.log('Submitting Meal Plan:', mealPlan);
    navigate('/mealPlanView', { state: { mealPlan } });
  };




  const handleIngredientChange = (index, e) => {
    const newIngredients = [...mealPlan.ingredients];
    newIngredients[index][e.target.name] = e.target.value;
    setMealPlan(prevState => ({
      ...prevState,
      ingredients: newIngredients
    }));
  };

  const addIngredient = () => {
    setMealPlan(prevState => ({
      ...prevState,
      ingredients: [...prevState.ingredients, { name: '', quantity: '', unit: '' }]
    }));
  };

  const removeIngredient = (index) => {
    const newIngredients = [...mealPlan.ingredients];
    newIngredients.splice(index, 1);
    setMealPlan(prevState => ({
      ...prevState,
      ingredients: newIngredients
    }));
  };

  return (
    <Layout>
      <div
        className="container mx-auto p-4"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }}>
        <h1 className="text-3xl font-bold mb-6 text-center">Create Meal Plan</h1>
        
        {/* Form for new meal item input */}
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <input 
            type="text"
            name="mealPlanName"
            placeholder="Meal Plan Name"
            value={mealPlan.mealPlanName}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2"
          />
          <textarea
            name="mealDescription"
            placeholder="Describe your meal plan"
            value={mealPlan.mealDescription}
            onChange={handleInputChange}
            className="border rounded h-20 w-full p-2 mt-4"
          />
          {/* Image Upload */}
        <div className="mb-4">
          {mealPlan.image && (
            <>
              <img src={mealPlan.image} alt="Meal Plan" className="w-full h-64 object-cover rounded-lg mb-4"/>
              <button onClick={removeImage} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Remove Image
              </button>
            </>
          )}
          {!mealPlan.image && (
            <input 
              type="file"
              onChange={handleImageChange}
              className="border rounded p-2 w-full"
            />
          )}
        </div>

          {/* Ingredients List */}
          {mealPlan.ingredients.map((ingredient, index) => (
            <div key={index} className="flex gap-2 mt-4">
              <input
                type="text"
                name="name"
                placeholder="Ingredient Name"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, e)}
                className="border rounded h-10 w-1/3 p-2"
              />
              <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, e)}
                className="border rounded h-10 w-1/3 p-2"
              />
              <input
                type="text"
                name="unit"
                placeholder="Unit (e.g., grams, cups)"
                value={ingredient.unit}
                onChange={(e) => handleIngredientChange(index, e)}
                className="border rounded h-10 w-1/3 p-2"
              />
              <button onClick={() => removeIngredient(index)} className="bg-red-500 text-white p-2 rounded">Remove</button>
            </div>
          ))}
          <button onClick={addIngredient} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">Add Ingredient</button>

          {/* Cooking Instructions */}
          <textarea
            name="cookingInstructions"
            placeholder="Cooking Instructions"
            value={mealPlan.cookingInstructions}
            onChange={handleInputChange}
            className="border rounded h-20 w-full p-2 mt-4"
          />

          {/* Nutritional Information */}
          <div className="flex space-x-2 mt-4">
          <input 
            type="number"
            name="calories"
            placeholder="Calories"
            value={mealPlan.calories}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          />
          
          <input 
            type="number"
            name="protein"
            placeholder="Protein (g)"
            value={mealPlan.protein}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          />
          <input 
            type="number"
            name="carbs"
            placeholder="Carbs (g)"
            value={mealPlan.carbs}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          />
          <input 
            type="number"
            name="fat"
            placeholder="Fat (g)"
            value={mealPlan.fat}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          />
          </div>
          {/* Portion Sizes */}
          <input 
            type="number"
            name="servingSize"
            placeholder="Serving Size"
            value={mealPlan.servingSize}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          />
          <input 
            type="text"
            name="servingUnit"
            placeholder="Serving Unit (e.g., servings, pieces)"
            value={mealPlan.servingUnit}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          />

          {/* Dietary Preferences */}
          <select
            name="dietaryPreferences"
            value={mealPlan.dietaryPreferences}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          >
            <option value="">Select Dietary Preference</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="keto">Keto</option>
            <option value="gluten-free">Gluten-Free</option>
          </select>

          {/* Meal Types */}
          <select
            name="mealType"
            value={mealPlan.mealType}
            onChange={handleInputChange}
            className="border rounded h-10 w-full p-2 mt-4"
          >
            <option value="">Select Meal Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>

          {/* Tags */}
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated, e.g., quick, budget)"
            value={mealPlan.tags.join(', ')}
            onChange={(e) => setMealPlan(prevState => ({ ...prevState, tags: e.target.value.split(',') }))}
            className="border rounded h-10 w-full p-2 mt-4"
          />

          {/* Privacy and Sharing Options */}
          <fieldset className="mb-4 mt-4">
            <legend className="text-xl font-bold">Privacy and Sharing Options</legend>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="privacyOption"
                value="public"
                checked={mealPlan.privacyOption === 'public'}
                onChange={handleInputChange}
              /> Public
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="privacyOption"
                value="private"
                checked={mealPlan.privacyOption === 'private'}
                onChange={handleInputChange}
              /> Private
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="radio"
                name="privacyOption"
                value="shareable"
                checked={mealPlan.privacyOption === 'shareable'}
                onChange={handleInputChange}
              /> Shareable
            </label>
            {mealPlan.privacyOption === 'shareable' && (
              <input
                type="text"
                name="sharedUsers"
                placeholder="Enter usernames or groups"
                value={mealPlan.sharedUsers}
                onChange={handleInputChange}
                className="ml-2 border rounded p-2"
              />
            )}
          </fieldset>
          <button 
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Share
        </button>
        </div>
      </div>
    </Layout>
  );
};

export default MealPlan;
