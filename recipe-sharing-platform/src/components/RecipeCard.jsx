import React from 'react'

const RecipeCard = ({recipe}) => {

  return (
    <div className= "bg-white p-4 rounded-lg shadow-md">
      <img 
      src={recipe.imageUrl}
      alt={recipe.name}
      className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.name}</h2>
        <p className="text-gray-600">{recipe.description}</p>
        <ul className="List-disc List-inside mt-2">
          {recipe.ingredients.map((ingredient, id)=>(
            <li key={id}>{ingredient}</li>
          ))}

        </ul>

      </div>

    </div>
   
  )
}

export default RecipeCard