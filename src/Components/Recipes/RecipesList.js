import RecipeCard from "./RecipeCard";

function RecipesList({ recipes }) {
  return (
    <section className="recipes-list max-width">
      {recipes?.map((recipe) => {
        return (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
            time={recipe.readyInMinutes}
            servings={recipe.servings}
            health={recipe.healthScore}
            rating={recipe.spoonacularScore}
          />
        );
      })}
    </section>
  );
}

export default RecipesList;
