import nutrition from "../../img/svgs/nutrition.svg";
import instruction from "../../img/svgs/instruction.svg";
import ingredients from "../../img/svgs/ingredients.svg";
import diet from "../../img/svgs/diet.svg";
import hamburger from "../../img/hamburger_timelapse/medium-1920.jpg";

function Features() {
  return (
    <section className="features">
      <div className="container max-width">
        <div className="points">
          <div className="point">
            <div className="svg">
              <img src={nutrition} alt="nutrition icon" />
            </div>
            <span className="description">
              Complete nutritional value along with recipes.
            </span>
          </div>

          <div className="point">
            <div className="svg">
              <img src={instruction} alt="instruction checklist icon" />
            </div>
            <span className="description">
              Clear and concise instructions for preparation.
            </span>
          </div>

          <div className="point">
            <div className="svg">
              <img src={ingredients} alt="ingredients icon" />
            </div>
            <span className="description">
              Curated list of all ingredients required.
            </span>
          </div>

          <div className="point">
            <div className="svg">
              <img src={diet} alt="diets icon" />
            </div>
            <span className="description">
              Choose between a wide variety of diets.
            </span>
          </div>
        </div>
        <div className="image">
          <img src={hamburger} alt="" />
          <div className="offset-frame"></div>
        </div>
      </div>
    </section>
  );
}

export default Features;
