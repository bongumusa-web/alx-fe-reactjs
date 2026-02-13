import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
 function AddRecipeForm() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const [error,setError] = useState("");


    //function to handle uspmite 
    const handleSubmit = (e) => {
        e.preventDefault(); 

        //validation
        if(!title || !ingredients || !instructions){
            setError("Please fill in all fields!");
            return;
        }

        // recipe object

        const newRecipe = {
            title,
            ingredients:ingredients.split("\n"), //spliting the ingrediants
            instructions:instructions.split("\n"),

        };

        alert('new recipe submited', newRecipe);

        //clear form

        setTitle("");
        setIngredients("");
        setInstructions("");
        setError("");
    };



    return (


        <div className="p-4 max-w-[600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label>Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            className="w-full border p-2"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label>Ingredients (one per line)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="List ingredients, one per line"
            rows="4"
            className="w-full border p-2"
          />
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label>Instructions (one per line)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="List instructions, one per line"
            rows="4"
            className="w-full border p-2"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2">
          Submit Recipe
        </button>
      </form>
      <Link to="/" className="text-blue-500 mb-4 inline-block">
        ⬅ Back to Home
      </Link>
    </div>
    )
 }
 export default AddRecipeForm;
