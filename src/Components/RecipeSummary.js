import { useNavigate } from "react-router-dom";
import time_svg from "../img/svgs/preparation_time.svg";
import servings_svg from "../img/svgs/serving.svg";

function RecipeSummary({ image, title, summary, time, servings, index, id }) {
  const navigate = useNavigate();
  return (
    <div className="summary">
      <div className={`image ${index % 2 !== 0 ? "order-2" : ""}`}>
        <img src={image} alt="the dish referred to in the title" />
      </div>
      <div className={`info-container ${index % 2 !== 0 ? "order-1" : ""}`}>
        <h3>{title}</h3>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: summary }}
        />
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
        </div>
        <button
          className="btn-square btn-color-invert"
          onClick={() => navigate(`/recipes/${id}`)}
        >
          Tell me More!
        </button>
      </div>
    </div>
  );
}

export default RecipeSummary;
