import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetail'
import './App.css'

function App() {

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
    </>
  )
}

export default App;
