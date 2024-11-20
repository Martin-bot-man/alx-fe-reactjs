//RecipeList component
import React from 'react'
  import { useRecipeStore } from './zustand';
  import React,{useState, useEffect} from 'react';

  const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const [filters, setFilters] = useState({});
    const {
      filteredRecipes,
      searchAndFilterRecipes// assuming action exists in your store
      
    }=useRecipeStore();

    const handleSearch = (term)=> {
      setSearchTerm(term);
    };
    const handleFilterChange = (newFilters)=> {
      setFilters({...filters,...newFilters});
    };
    useEffect(()=>{
      searchAndFilterRecipes(searchTerm, filters);

    },[searchTerm, filters, searchandFilterRecipes]);

    return (
      <div>
        <SearchBar onSearch={handleSearch}/>
        <FilterOptions onFilterChange={handleFilterChange}/>
        {/* display recipes from the zustand store*/}
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    );
  };
  export default RecipeList