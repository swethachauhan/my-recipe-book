import React from 'react'

function RecipeCard({recipe}) {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe; 

const addToFavourite = (recipe) => {

}
  return (
    <div className='recipe-card'>
        <img 
            src = {strMealThumb}
            alt = {strMeal}
            className = "card-image"
        />
        <div className='card-content'>
            <h3 className='recipe-category'>{strCategory}</h3>
            <h4 >{strMeal}</h4>
            <a href={"https://www.themealdb.com/meal/" + idMeal} target="" rel="" >Instructions</a>
            <button onClick={() => addToFavourite(recipe)}>FAV</button>
        </div>
    </div>
  )
}

export default RecipeCard