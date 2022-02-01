import { useState, useEffect, useCallback } from "react";
import request from "../../request";
import RecipeCard from "../Recipes/RecipeCard";

function RelatedRecipes({ id }) {
  const [similarRecipes, setSimilarRecipes] = useState(null);
  const fetchData = useCallback(async () => {
    const data = await request(`recipes/${id}/similar`, {
      id,
      number: 4,
    });

    setSimilarRecipes(data);
  }, [id]);

  useEffect(() => {
    if (id) fetchData();
  }, [fetchData, id]);

  return (
    <section className="similar-recipes max-width">
      <h2>Similar Recipes</h2>
      <div className="cont">
        {similarRecipes?.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.${recipe.imageType}`}
              time={recipe.readyInMinutes}
              servings={recipe.servings}
            />
          );
        })}
      </div>
    </section>
  );
}

export default RelatedRecipes;
