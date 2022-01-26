import time_svg from "../../img/svgs/preparation_time.svg";
import servings_svg from "../../img/svgs/serving.svg";
import heart_svg from "../../img/svgs/heart.svg";
import rating_svg from "../../img/svgs/rating.svg";
import { useNavigate } from "react-router-dom";

function RecipeCard({ image, title, time, servings, health, rating, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="recipe-card"
      onClick={() => {
        navigate(`${id}`);
      }}
    >
      <div className="img-container">
        <img src={image} alt="recipe" className="img-cover" />
      </div>

      <h4>{title}</h4>

      <div className="svg-container">
        <div className="svg">
          <div className="icon">
            <img
              src={time_svg}
              alt="clock icon with spoon and fork depiction the time it will take for the dish to be prepared"
            />
          </div>
          <span>{time} mins</span>
        </div>
        <div className="svg">
          <div className="icon">
            <img
              src={servings_svg}
              alt="a plate with food in it to depict the number of people the dish will serve"
            />
          </div>
          <span>Serves {servings}</span>
        </div>
        {health && (
          <div className="svg">
            <div className="icon">
              <img
                src={heart_svg}
                alt="heart with a pulse representing health score"
              />
            </div>
            <span>Health {health}</span>
          </div>
        )}
        {rating && (
          <div className="svg">
            <div className="icon">
              <img src={rating_svg} alt="star" />
            </div>
            <span>Rating {rating}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeCard;
