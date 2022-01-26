import RecipeNutrition from "./RecipeNutrition";

function RecipeInstructions({ info }) {
  return (
    <section className="recipe-ins max-width">
      <div className="cont">
        <h2>Instructions</h2>
        <ul className="ingredients">
          {info?.analyzedInstructions[0]?.steps.map((ele, i) => {
            return <li key={i}>{ele.step}</li>;
          })}
        </ul>
      </div>
      <RecipeNutrition id={info?.id} />
    </section>
  );
}

export default RecipeInstructions;
