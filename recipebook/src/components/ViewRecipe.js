import React from "react";

function ViewRecipe({ viewRec }) {
  return (
    <div className="recipe-instructions">
      <div>
        <img
          src={viewRec.strMealThumb}
          alt={viewRec.strMeal}
          className="view-image"
          width={200}
          height={200}
        />
      </div>
      <div>
        <h2 className="recipe-name">{viewRec.strMeal}</h2>
        <h3>{viewRec.strArea}</h3>
        <h3 className="recipe-category">{viewRec.strCategory}</h3>
      </div>

      <div>
        <div className="title">Ingredients</div>
        <table className="ingredient-table">
          <tbody>
            {viewRec.strIngredient1 !== "" && (
              <tr key={1}>
                <td>{viewRec.strIngredient1}</td>
                <td>{viewRec.strMeasure1}</td>
              </tr>
            )}
            {viewRec.strIngredient2 !== "" && (
              <tr key={2}>
                <td>{viewRec.strIngredient2}</td>
                <td>{viewRec.strMeasure2}</td>
              </tr>
            )}
            {viewRec.strIngredient3 !== "" && (
              <tr key={3}>
                <td>{viewRec.strIngredient3}</td>
                <td>{viewRec.strMeasure3}</td>
              </tr>
            )}
            {viewRec.strIngredient4 !== "" && (
              <tr key={4}>
                <td>{viewRec.strIngredient4}</td>
                <td>{viewRec.strMeasure4}</td>
              </tr>
            )}
            {viewRec.strIngredient5 !== "" && (
              <tr key={5}>
                <td>{viewRec.strIngredient5}</td>
                <td>{viewRec.strMeasure5}</td>
              </tr>
            )}
            {viewRec.strIngredient6 !== "" && (
              <tr key={6}>
                <td>{viewRec.strIngredient6}</td>
                <td>{viewRec.strMeasure6}</td>
              </tr>
            )}
            {viewRec.strIngredient7 !== "" && (
              <tr key={7}>
                <td>{viewRec.strIngredient7}</td>
                <td>{viewRec.strMeasure7}</td>
              </tr>
            )}
            {viewRec.strIngredient8 !== "" && (
              <tr key={8}>
                <td>{viewRec.strIngredient8}</td>
                <td>{viewRec.strMeasure8}</td>
              </tr>
            )}
            {viewRec.strIngredient9 !== "" && (
              <tr key={9}>
                <td>{viewRec.strIngredient9}</td>
                <td>{viewRec.strMeasure9}</td>
              </tr>
            )}
            {viewRec.strIngredient10 !== "" && (
              <tr key={10}>
                <td>{viewRec.strIngredient10}</td>
                <td>{viewRec.strMeasure10}</td>
              </tr>
            )}
            {viewRec.strIngredient11 !== "" && (
              <tr key={11}>
                <td>{viewRec.strIngredient11}</td>
                <td>{viewRec.strMeasure11}</td>
              </tr>
            )}
            {viewRec.strIngredient12 !== "" && (
              <tr key={12}>
                <td>{viewRec.strIngredient12}</td>
                <td>{viewRec.strMeasure12}</td>
              </tr>
            )}
            {viewRec.strIngredient13 !== "" && (
              <tr key={13}>
                <td>{viewRec.strIngredient13}</td>
                <td>{viewRec.strMeasure13}</td>
              </tr>
            )}
            {viewRec.strIngredient14 !== "" && (
              <tr key={14}>
                <td>{viewRec.strIngredient14}</td>
                <td>{viewRec.strMeasure14}</td>
              </tr>
            )}
            {viewRec.strIngredient15 !== "" && (
              <tr key={15}>
                <td>{viewRec.strIngredient15}</td>
                <td>{viewRec.strMeasure15}</td>
              </tr>
            )}
            {viewRec.strIngredient16 !== "" && (
              <tr key={16}>
                <td>{viewRec.strIngredient16}</td>
                <td>{viewRec.strMeasure16}</td>
              </tr>
            )}
            {viewRec.strIngredient17 !== "" && (
              <tr key={17}>
                <td>{viewRec.strIngredient17}</td>
                <td>{viewRec.strMeasure17}</td>
              </tr>
            )}
            {viewRec.strIngredient18 !== "" && (
              <tr key={18}>
                <td>{viewRec.strIngredient18}</td>
                <td>{viewRec.strMeasure18}</td>
              </tr>
            )}
            {viewRec.strIngredient19 !== "" && (
              <tr key={19}>
                <td>{viewRec.strIngredient19}</td>
                <td>{viewRec.strMeasure19}</td>
              </tr>
            )}
            {viewRec.strIngredient20 !== "" && (
              <tr key={20}>
                <td>{viewRec.strIngredient20}</td>
                <td>{viewRec.strMeasure20}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="description">{viewRec.strInstructions}</div>
    </div>
  );
}

export default ViewRecipe;
