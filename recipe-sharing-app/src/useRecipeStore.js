import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [], 
  searchTerm:'',

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }), 
  deleteRecipe:(recipeId)=>set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !==recipeId)
  })),
  updateRecipe:(updateRecipe) => set(state =>({
    recipes:state.recipes.map(recipe=>
      recipe.id === updateRecipe.id ? updateRecipe :recipe
    )
  })),
  setSearchTerm: (term)=> set({searchTerm: term}),

  getfilteredRecipes: ()=> set(state => ({
    filteredRecipes :state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  )
  })),
  const SearchBar =()=>{
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return(
      <input
      type="text"
      placeholder= "Search recipes..."
      onChange = {(e) => setSearchTerm(e.target.value)}
      />
    )
   
  }
}));

export default useRecipeStore