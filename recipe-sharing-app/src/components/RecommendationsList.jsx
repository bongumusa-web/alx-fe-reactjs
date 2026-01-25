import { useEffect, useMemo } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendationsRaw = useRecipeStore((state) => state.recommendations || []);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  const recommendations = useMemo(() => recommendationsRaw || [], [recommendationsRaw]);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
