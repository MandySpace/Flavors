import { useEffect, useState } from "react";
import request from "../../request";

import RecipeSummary from "../RecipeSummary";

function SuggestedRecipes() {
  const [recipes, setRecipes] = useState(null);

  const getData = async () => {
    const data = await request("recipes/random", { number: 2 });
    localStorage.setItem("suggestedRecipes", JSON.stringify(data.recipes));
    setRecipes(data.recipes);
  };

  useEffect(() => {
    if (!localStorage.getItem("suggestedRecipes")) getData();
    setRecipes(JSON.parse(localStorage.getItem("suggestedRecipes")));
  }, []);

  return (
    <section className="suggestions max-width">
      <h2>Confused about what to cook?</h2>
      <div className="sub-heading">Let us suggest a few dishes for you!</div>
      <div className="recipes">
        {recipes?.map((recipe, i) => {
          return (
            <RecipeSummary
              key={recipe.id}
              index={i}
              id={recipe.id}
              image={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}`}
              // image={images[i]}
              title={recipe.title}
              summary={recipe.summary}
              time={recipe.readyInMinutes}
              servings={recipe.servings}
            />
          );
        })}
      </div>
      <button className="btn-square cta">Suggest More</button>
    </section>
  );
}

export default SuggestedRecipes;
