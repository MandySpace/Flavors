function RecipeIngredients({ info }) {
  return (
    <section className="recipe-ing max-width">
      <h2>Ingredients</h2>
      <div className="ingredients">
        {info?.extendedIngredients.map((ing) => {
          return (
            <div className="ing" key={ing.id}>
              <img
                src={`https://spoonacular.com/cdn/ingredients_100x100/${ing.image}`}
                alt=""
              />
              <p>{ing.original}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RecipeIngredients;
