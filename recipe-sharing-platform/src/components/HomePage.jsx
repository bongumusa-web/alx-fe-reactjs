import { useState, useEffect } from "react";
import recipesData from "../data.json";


export default function HomePage() {
    const [recipes, setRecipes] = useState([]);
    

    useEffect(() => {
        setRecipes(recipesData); //loding mock data
    }, []);


    return (
        <div className="min-h-screen bg-slate-200 p-4">
            <h1 className="text-3xl font-bold mb-6 text-center"> Recip Sharing </h1>

            <div className="grid  grid-col-1 sm:grid-cols-2  md:grid-cols-3  gap-4 ">
                { recipes.map((recipe) =>  (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl">
                        <img src={recipe.image}  alt={recipe.title} className=" w-full  h-[250px] object-cover"/>

                        <div className="p-4">
                            <h2 className=" text-xl font-semibold mb-2"> {recipe.title}</h2>
                            <p className=" text-gray-500"> {recipe.summary}</p>


                        </div>

                    </div>

                ))}

                
            </div>
        </div>

    );
}