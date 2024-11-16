import create from 'zustand';

const useRecipeStore = create(set=>({
    recipes:[],
    addRecipe: (newRecipe)=> set(state=>({recipes: [...state.recipes, newRecipe]})),
    setRecipes: (recipes)=> set({recipes})
    updateRecipe: (newUpdates)=> set({newupdates})
    deleteRecipe: (deleteRecipe)=> set({})

}));
export default useRecipeStore;