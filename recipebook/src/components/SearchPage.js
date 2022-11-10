import '../App.css';
import React, { useState, useEffect } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeCard from './RecipeCard';
const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function SearchPage() {

  const [isLoading, setIsLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("vegetarian");
  const [recipes, setRecipies] = useState([]);

  const listRecipes = async () => {
    setIsLoading(true);
    const url = baseURL + searchKey
    const result = await fetch(url);
    const data = await result.json();
    setRecipies(data.meals);
    setIsLoading(false)
    setSearchKey("");
  };

  useEffect(() => {
    listRecipes()
  }, [ ]);

  const handleSubmit = e =>{
    e.preventDefault();
    listRecipes();
  }

  const loadFavourite = () => {
    
  }
  
  return (
    <div className="container">
     
      <SearchRecipe 
        isLoading = {isLoading}
        searchKey = {searchKey}
        setSearchKey = {setSearchKey}
        handleSubmit = {handleSubmit}
        loadFavourite = {loadFavourite}
      />
      <div className="recipes">
          {recipes ? recipes.map(recipe =>(
              <RecipeCard
                 key = {recipe.idMeal}
                 recipe ={recipe}
               />
          )): "No Results"}
      </div>
    </div>
  );
}

export default SearchPage;
