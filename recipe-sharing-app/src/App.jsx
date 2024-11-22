
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import route from './routes.js';

const App = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element = {<App />} />
                <Route path = "/recipes/ :recipeId" element= {<RecipeDetails />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App;
