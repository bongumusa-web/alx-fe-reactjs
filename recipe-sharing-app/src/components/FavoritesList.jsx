import { useMemo } from 'react';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites || []);
  const recipes = useRecipeStore(state => state.recipes || []);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Compute derived favorites safely
  const favorites = useMemo(() => {
    return favoritesIds
      .map(id => recipes.find(r => r.id === id))
      .filter(Boolean); // remove undefined in case recipe not found
  }, [favoritesIds, recipes]);

  if (favorites.length === 0) return <p>No favorite recipes yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
