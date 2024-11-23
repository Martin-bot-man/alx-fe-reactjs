
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import route from './routes.js';
import FavoritesList from './components/FavoritesList.jsx';
import RecommendationList from './components/RecommendationsList.jsx';

const App = ()=> {
    return (
     <>
        <FavoritesList />
        <RecommendationList />
     </>
    )
}

export default App;
