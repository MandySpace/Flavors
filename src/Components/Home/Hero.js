import hero_5433 from "../../img/hero_img/original-5433.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const ctaHandler = () => {
    navigate(`/recipes`);
  };

  return (
    <div className="hero">
      <div className="hero-img">
        <img
          src={hero_5433}
          alt="Sweet delicacies on a serving board with black background"
          className="img-cover"
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-text max-width">
        <h1 className="hero-text-title">
          Time to give your taste buds a <span>treat!</span>
        </h1>
        <p className="hero-text-subtitle">
          Want to learn cooking or looking for a new recipe?
        </p>
        <p className="hero-text-subtext">
          Lookup various recipes from different cuisines and diets from around
          the world which are tailored to your specific needs.
        </p>
        <button className="hero-text-cta btn-square" onClick={ctaHandler}>
          Let's do it
        </button>
      </div>
    </div>
  );
}

export default Hero;
