import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import './App.css'

function routes() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
    </>
  )
}

export default routes;