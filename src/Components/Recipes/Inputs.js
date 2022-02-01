import SearchBar from "./SearchBar";
import Filters from "./Filters";
import { useCallback, useEffect, useState } from "react";
import request from "../../request";
import SelectBox from "../SelectBox";

const sortFields = [
  "meta-score",
  "popularity",
  "healthiness",
  "time",
  "calories",
];

function Inputs({
  setRecipes,
  setNoOfRecipes,
  RESULTS_PER_PAGE,
  activePage,
  setActivePage,
  cuisines,
  setCuisines,
  meals,
  setMeals,
  diets,
  setDiets,
  setIsLoading,
}) {
  const [query, setQuery] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [maxCalories, setMaxCalories] = useState(2000);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const recipes = await request("recipes/complexSearch", {
      query: query,
      addRecipeInformation: true,
      cuisine: cuisines,
      diet: diets,
      type: meals,
      maxCalories: maxCalories,
      number: RESULTS_PER_PAGE,
      offset: (activePage - 1) * RESULTS_PER_PAGE,
      sort: sortBy,
    });

    setNoOfRecipes(recipes.totalResults);
    setRecipes(recipes.results);
    setIsLoading(false);
  }, [
    query,
    cuisines,
    diets,
    meals,
    sortBy,
    activePage,
    RESULTS_PER_PAGE,
    setNoOfRecipes,
    setRecipes,
    maxCalories,
    setIsLoading,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const requestRecipesHandler = async (e) => {
    e.preventDefault();
    fetchData();
    setActivePage(1);
  };

  return (
    <section className="user-inputs max-width">
      <h1 className="recipes-title">RECIPES</h1>
      <form onSubmit={requestRecipesHandler}>
        <SearchBar setQuery={setQuery} />
        <SelectBox fields={sortFields} name="Sort By" setState={setSortBy} />

        <Filters
          setCuisines={setCuisines}
          setMeals={setMeals}
          setDiets={setDiets}
          setSortBy={setSortBy}
          maxCalories={maxCalories}
          setMaxCalories={setMaxCalories}
          cuisines={cuisines}
          meals={meals}
          diets={diets}
        />
      </form>
      <button className="btn-square search-btn" onClick={requestRecipesHandler}>
        SEARCH
      </button>
    </section>
  );
}

export default Inputs;
