import create from 'zustand';

const useRecipeStore = create(set=>({
    recipes:[],
    addRecipe: (newRecipe)=> set(state=>({recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes)=> set({recipes}),
    updateRecipe: (newUpdates)=> set({newUpdates}),
    deleteRecipe: (deleteRecipe)=> set({deleteRecipe}),
    setSearchTerm:(searchTerm)=> set({searchTerm}),

}));
export default useRecipeStore;