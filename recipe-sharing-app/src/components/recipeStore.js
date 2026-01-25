import { create } from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),

  //delete a recipe by id
  deleteRecipe:(id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),

  //updating the recipe
  updateRecipe:(updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
}));


export default useRecipeStore;
