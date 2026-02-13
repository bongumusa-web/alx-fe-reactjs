import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams(); // get recipe id from URL
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500 text-xl">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-200 p-6">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ⬅️ Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-lg max-w-2xl mx-auto overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-w-[800px] h-[300px] sm:h-[350px] md:h-[450px] object-cover rounded-xl"

        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-600">{recipe.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
