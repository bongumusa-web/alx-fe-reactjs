import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!steps.trim()) newErrors.steps = "Steps are required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };

    console.log("New Recipe Submitted:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-xl shadow-md space-y-4"
      >
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold">Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, one per line"
            rows="4"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && (
            <p className="text-red-500 mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 font-semibold">Steps (one per line)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="List steps, one per line"
            rows="4"
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.steps && <p className="text-red-500 mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md font-semibold transition-colors"
        >
          Submit Recipe
        </button>
      </form>

      <Link
        to="/"
        className="text-blue-500 mt-6 hover:underline font-medium"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}

export default AddRecipeForm;
