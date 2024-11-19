import React from 'react';
import { useRecipeStore } from './useRecipeStore';

const RecipeDetails = ({recipeId}) => {
const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === recipeId)
);
if(!recipe){
  return <div>Recipe not found.</div>
}
  
  return (
    <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button>Edit btn</button>
        <button>Delete btn</button>
    </div>
  )
}

export default RecipeDetails;