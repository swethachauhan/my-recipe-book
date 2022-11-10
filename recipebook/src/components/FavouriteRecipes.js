import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import ViewRecipe from "./ViewRecipe";

function FavouriteRecipes() {
  const [favRecipes, setFavRecipes] = useState("");
  const [desc, setDesc] = useState("");
  const [viewRec, setViewRec] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/recipes")
      .then((res) => res.json())
      .then((res) => {
        setFavRecipes(res);
      });
  });

  const displayDescription = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setDesc(res.meals[0]);
        setViewRec(true);
      });
  };

  return (
    <div className="container">
      {!viewRec ? (
        <div className="recipes">
          {favRecipes
            ? favRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.idMeal}
                  recipe={recipe}
                  favRecipes={favRecipes}
                  displayDescription={displayDescription}
                />
              ))
            : "No Results"}
        </div>
      ) : (
        <ViewRecipe viewRec = {desc}/>
      )}
    </div>
  );
}

export default FavouriteRecipes;
