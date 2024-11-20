import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import { useRecipeStore } from 'useRecipeStore';

const DeleteRecipeButton = ()=> {
    const {recipeId} = useParams();
    const navigate = useNavigate();
    const {deleteRecipe}= useRecipeStore();

    const handleDelete = ()=> {
        if(window.confirm('Are you sure you want to delet this recipe?')){deleteRecipe(recipeId);
            navigate('/');
        }
    };
return (
    <button onClick={handleDelete}></button>
);
};
export default DeleteRecipeButton
