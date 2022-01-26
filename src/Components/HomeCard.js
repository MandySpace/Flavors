import { useNavigate } from "react-router-dom";

function CuisineCard({ title, image, description, data, setState }) {
  const navigate = useNavigate();
  const cardHandler = (e) => {
    setState(e.target.closest(".home-card").dataset.filter);
    navigate("/recipes");
  };

  return (
    <div className="home-card" data-filter={data} onClick={cardHandler}>
      <div className="img-container">
        <img src={image} alt="cuisine" className="img-cover" />
      </div>
      <h4>{title}</h4>
      {description && <p>{description}</p>}
    </div>
  );
}

export default CuisineCard;
