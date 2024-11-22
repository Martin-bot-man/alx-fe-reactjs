//RecipeList component
import React from 'react';
import {Link} from 'react-router-dom';
import {useRecipeStore} from './zustand';

  import { useRecipeStore } from './zustand';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <div >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
          </link>
        ))}
      </div>
    );
  };
  export default RecipeList