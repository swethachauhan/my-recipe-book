import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function RecipeCard({recipe , favRecipes, displayDescription, listRecipes }) {

    const [ fav, setFav ] = useState(false)
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe; 

const addToFavourite = () => {


    fetch('http://localhost:8080/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    }).then(response => {
        setFav(true)
        console.log(response)
        listRecipes()
    });

}

const removeFromFavourite = () => {


    fetch(`http://localhost:8080/api/recipes/${idMeal}`, {
      method: 'DELETE',
      body: JSON.stringify(recipe),
    }).then(response => {
        setFav(true)
        console.log(response)
    });

}

  return (
    <div className='recipe-card'>
        <img 
            src = {strMealThumb}
            alt = {strMeal}
            className = "card-image"
        />
        <div className='card-content'>
            <div className='recipe-category'>{strCategory}</div>
            <div >{strMeal}</div>
            <button className='recipe-instruction' onClick={()=>displayDescription(idMeal)}>Instructions</button>
            {(favRecipes.filter(o => o.idMeal === idMeal).length !== 1) ?
             (<button value={ fav } onClick={() => addToFavourite() } className = 'fav-btn'><FcLikePlaceholder/></button>)
             : (<button value={ fav } onClick={() => removeFromFavourite() } className = 'fav-remove-btn'><FcLike /></button>)}
        </div>
    </div>
  )
}

export default RecipeCard