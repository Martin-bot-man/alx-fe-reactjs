import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetail';
import App from './App';

const Router = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="/" element = {<App />} />
                <Route path = "/recipes/ :recipeId" element= {<RecipeDetails />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;
