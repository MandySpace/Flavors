function RecipeHeader({ info }) {
  return (
    <section className="recipe-header max-width">
      <h1>{info?.title}</h1>
      <div className="recipe-summary">
        <div className="img-container">
          <img
            src={`https://spoonacular.com/recipeImages/${info?.id}-636x393.${info?.imageType}`}
            alt="recipe"
          />
        </div>
        <p
          className="decription"
          dangerouslySetInnerHTML={{ __html: info?.summary }}
        />
      </div>
    </section>
  );
}

export default RecipeHeader;
