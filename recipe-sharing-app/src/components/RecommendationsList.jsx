import React from 'react';
import { useRecipeStore } from './zustand';

const RecommendationList = () => {
  const { favoriteRecipes, getRecommendations, recipes } = useRecipeStore();

  const recommendations = getRecommendations(); // Get recommendations from the store

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recipeId) => {
            const recipe = recipes.find((r) => r.id === recipeId); // Find recipe by ID
            return (
              <li key={recipeId}>
                {/* Display recipe details */}
                {recipe.name} - {recipe.ingredients.join(', ')}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          {favoriteRecipes.length > 0
            ? 'No recommendations yet. Add more favorites!'
            : 'No recommendations yet. Start exploring recipes!'}
        </p>
      )}
    </div>
  );
};

export default RecommendationList;