import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // Load recipe based on URL id
  useEffect(() => {
    const foundRecipe = recipesData.find(
      (r) => r.id === parseInt(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Recipe not found</p>;
  }

  return (
    /* Whole Page Container */
    <div className="min-h-screen bg-slate-100 p-4">
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        ⬅ Back to Home
      </Link>

      {/* Center everything */}
      <div className="max-w-[900px] mx-auto">

        {/*  Image Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
        </div>

        {/*  Instructions / Content */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-6">
          <h1 className="text-3xl font-bold mb-2">
            {recipe.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {recipe.summary}
          </p>

          {/* Ingredients */}
          <h2 className="text-xl font-semibold mb-2">
            Ingredients
          </h2>
          <ul className="list-disc list-inside mb-6">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Instructions */}
          <h2 className="text-xl font-semibold mb-2">
            Instructions
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

      </div>
    </div>
  );
}

export default RecipeDetail;
