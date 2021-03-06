import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "../request";
import Nav from "../Components/Nav";
import RecipeHeader from "../Components/RecipeInfo/RecipeHeader";
import RecipeIngredients from "../Components/RecipeInfo/RecipeIngredients";
import RecipeInstructions from "../Components/RecipeInfo/RecipeInstructions";
import RelatedRecipes from "../Components/RecipeInfo/RelatedRecipes";
import Spinner from "../Components/Spinner";

function RecipeInfo() {
  const [recipeInfo, setRecipeInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const data = await request(`recipes/${params["*"]}/information`, {
      id: params["*"],
      includeNutrition: true,
    });
    setIsLoading(false);
    setRecipeInfo(data);
  }, [params]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <>
      <Nav />

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <RecipeHeader info={recipeInfo} />
          <RecipeIngredients info={recipeInfo} />
          <RecipeInstructions info={recipeInfo} />
          <RelatedRecipes id={recipeInfo?.id} />
        </>
      )}
    </>
  );
}

export default RecipeInfo;
