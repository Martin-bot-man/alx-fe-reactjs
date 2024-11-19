import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [], 
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }), 
  deleteRecipe:(recipeId)=>set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !==recipeId)
  })),
  updateRecipe:(updateRecipe) => set(state =>({
    recipes:state.recipes.map(recipe=>
      recipe.id === updateRecipe.id ? updateRecipe :recipe
    )
  }))
}));

export default useRecipeStore