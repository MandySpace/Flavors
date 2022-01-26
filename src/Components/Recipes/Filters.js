import SelectBox from "../SelectBox";

const cuisineFields = [
  "African",
  "American",
  "British",
  "Cajun",
  "Caribbean",
  "Chinese",
  "Eastern European",
  "European",
  "French",
  "German",
  "Greek",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Jewish",
  "Korean",
  "Latin American",
  "Mediterranean",
  "Mexican",
  "Middle Eastern",
  "Nordic",
  "Southern",
  "Spanish",
  "Thai",
  "Vietnamese",
];

const mealFields = [
  "main course",
  "side dish",
  "dessert",
  "appetizer",
  "salad",
  "bread",
  "breakfast",
  "soup",
  "beverage",
  "sauce",
  "marinade",
  "fingerfood",
  "snack",
  "drink",
];

const dietFields = [
  "Gluten Free",
  "Ketogenic",
  "Vegetarian",
  "Lacto-Vegetarian",
  "Ovo-Vegetarian",
  "Vegan",
  "Pescetarian",
  "Paleo",
  "Primal",
  "Low FODMAP",
  "Whole30",
];

function Filters({
  setCuisines,
  setMeals,
  setDiets,
  maxCalories,
  setMaxCalories,
  cuisines,
  meals,
  diets,
}) {
  return (
    <div className="filters">
      <div className="select-box-container">
        <SelectBox
          value={cuisines}
          fields={cuisineFields}
          name="All Cuisines"
          setState={setCuisines}
        />
        <SelectBox
          value={diets}
          fields={dietFields}
          name="All Diets"
          setState={setDiets}
        />
        <SelectBox
          value={meals}
          fields={mealFields}
          name="All Meals"
          setState={setMeals}
        />
      </div>

      <div className="calorie-slider">
        <input
          type="range"
          min="1"
          max="2007"
          step="10"
          value={maxCalories}
          className="slider"
          onChange={(e) => setMaxCalories(e.target.value)}
        />
        <p>Max Calories: {maxCalories}kcal</p>
      </div>
    </div>
  );
}

export default Filters;
