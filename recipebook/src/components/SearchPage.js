import '../App.css';
import React, { useState, useEffect } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeCard from './RecipeCard';
import ViewRecipe from './ViewRecipe'
const baseURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const SearchPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [recipes, setRecipies] = useState([]);
  const [favRecipes, setFavRecipes] = useState([]);
  const [desc, setDesc] = useState("");
  const [viewRec, setViewRec] = useState(false);

  const listRecipes = async () => {

    const favRecData = await fetch("http://localhost:8080/api/recipes").then(res => res.json())
    setFavRecipes(favRecData);
    setIsLoading(true);
    const url = baseURL + searchKey
    const data =  await fetch(url).then(result => result.json() )
    console.log(data)
    setRecipies(data.meals);
    
    setIsLoading(false)
    };

  useEffect(() => {
    setViewRec(false)
    listRecipes()
  },[]);

  const handleSubmit = e =>{
    e.preventDefault();
    setViewRec(false)
    console.log(searchKey)
    listRecipes();
  }

  const displayDescription = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDesc(res.meals[0]);
        setViewRec(true);
        console.log(res);
      });
  };
  
  return (
    <div className="container">
     
     
      {!viewRec ? (
        <><SearchRecipe
          isLoading={isLoading}
          searchKey={searchKey}
          setSearchKey={setSearchKey}
          handleSubmit={handleSubmit} /><div className="recipes">
            {recipes
              ? recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  favRecipes={favRecipes}
                  displayDescription={displayDescription}
                  listRecipes={listRecipes} />
              ))
              : "No Results"}
          </div></>
      ) : (
        <ViewRecipe 
        viewRec = {desc}
        />
      )}
    </div>
  );
}

export default SearchPage;
