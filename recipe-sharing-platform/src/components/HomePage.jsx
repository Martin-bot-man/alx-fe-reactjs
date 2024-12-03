import React from 'react'
import {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard';



const HomePage = () => {
  const[recipes, setRecipes]=useState([]);

  useEffect(()=>{
    const fetchRecipes = async()=>{
      try{
        const  response = await fetch('/data.json');
        const data = await response.json();
        setRecipes(data);
      } catch(error){
        console.error('Error fetching recipes:', error);
      }
    }
    fetchRecipes();
  },[]);
  return (
    <div>
      {recipes.map((recipe)=>(
        <RecipeCard key={recipe.id} recipe={recipe}/>
      ))}
    </div>
  )
}

export default HomePage