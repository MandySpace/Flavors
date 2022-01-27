import { useState } from "react";
import Nav from "../Components/Nav";
import Inputs from "../Components/Recipes/Inputs";
import RecipesList from "../Components/Recipes/RecipesList";
import Pagination from "../Components/Pagination";
import Spinner from "../Components/Spinner";

const RESULTS_PER_PAGE = 20;

function Recipes({
  recipes,
  setRecipes,
  cuisines,
  setCuisines,
  meals,
  setMeals,
  diets,
  setDiets,
}) {
  const [activePage, setActivePage] = useState(1);

  const [noOfRecipes, setNoOfRecipes] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Nav />

      <Inputs
        setRecipes={setRecipes}
        setNoOfRecipes={setNoOfRecipes}
        RESULTS_PER_PAGE={RESULTS_PER_PAGE}
        activePage={activePage}
        setActivePage={setActivePage}
        setCuisines={setCuisines}
        setDiets={setDiets}
        setMeals={setMeals}
        cuisines={cuisines}
        meals={meals}
        diets={diets}
        setIsLoading={setIsLoading}
      />
      {!isLoading ? (
        <>
          <RecipesList recipes={recipes} />
          <Pagination
            noOfRecipes={noOfRecipes}
            activePage={activePage}
            setActivePage={setActivePage}
            RESULTS_PER_PAGE={RESULTS_PER_PAGE}
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default Recipes;
