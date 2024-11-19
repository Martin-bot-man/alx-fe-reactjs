import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
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
