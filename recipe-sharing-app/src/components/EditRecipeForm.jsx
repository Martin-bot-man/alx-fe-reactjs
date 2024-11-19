import React ,{ useState, useEffect} from 'react';
import { useParams, useNavigate }from  'react-router-dom';
import useRecipeStore from './useRecipeStore';

const EditRecipeForm = ()=> {
    const {recipeId} = useParams();
    const navigate = useNavigate();
    const {recipes, updateRecipe} = useRecipeStore();

    const [recipe, setRecipe] = useState({
        title:'',
        description: '',

    });
    useEffect(()=> {
        const foundRecipe = recipes.find(r => r.id ===recipeId);
        if(foundRecipe){
            setRecipe(foundRecipe);
        }else{//( redirection)
            navigate('/');   
    }

    },[recipes, recipeId, navigate]);
    const handleChange = (e)=> {
        setRecipe({...recipe,[e.target.name]: e.target.value})
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        updateRecipe(recipe);
        navigate('/');//redirect after updating
    };
    if(!recipe){
        return<div>Loading...</div>
    }
    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text"
                id="title"
                name="title"
                value ={recipe.title}
                onChange= {handleChange}
                 />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                id="description"
                name="description"
                value= {recipe.description}
                onChange={handleChange}
                />
            </div>
            <button type= "submit">Update Recipe</button>
        </form>

    );
};
export default EditRecipeForm;