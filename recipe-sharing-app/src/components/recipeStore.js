import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // added default favorites
  recommendations: [], // added default recommendations

  // CRUD actions
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // SEARCH/FILTER actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // FAVORITES
  addFavorite: (recipeId) => {
    const favorites = get().favorites || [];
    if (!favorites.includes(recipeId)) {
      set({ favorites: [...favorites, recipeId] });
    }
  },

  removeFavorite: (recipeId) => {
    const favorites = get().favorites || [];
    set({ favorites: favorites.filter((id) => id !== recipeId) });
  },

  // RECOMMENDATIONS
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended =
      recipes
        .filter((recipe) => !favorites.includes(recipe.id))
        .filter(() => Math.random() > 0.5) || [];
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
