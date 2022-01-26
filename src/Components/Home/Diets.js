import { diets } from "../../dietsData";
import { useNavigate } from "react-router-dom";

function Diets({ setDiets }) {
  const navigate = useNavigate();

  const clickDietsHandler = (e) => {
    setDiets(e.target.closest(".card").dataset.filter);
    navigate("/recipes");
  };

  return (
    <section className="diets">
      {/* <h2>Different diets to choose from</h2> */}
      <div className="card-container max-width">
        {diets.map((diet, i) => {
          return (
            <div
              className="card"
              key={i}
              data-filter={diet.title}
              onClick={clickDietsHandler}
            >
              <div className="img-container">
                <img src={diet.image} alt="diet" />
              </div>
              <h3>{diet.title}</h3>
              <p className="description">{diet.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Diets;
