import Nav from "../Components/Nav";
import Hero from "../Components/Home/Hero";
import Cuisines from "../Components/Home/Cuisines";
import Features from "../Components/Home/Features";
import SuggestedRecipes from "../Components/Home/SuggestedRecipes";
import Diets from "../Components/Home/Diets";
import Meals from "../Components/Home/Meals";

function Home({ setCuisines, setMeals, setDiets }) {
  return (
    <>
      <Nav />
      <Hero />
      <Cuisines setCuisines={setCuisines} />
      <Features />
      <SuggestedRecipes />
      <Diets setDiets={setDiets} />
      <Meals setMeals={setMeals} />
    </>
  );
}

export default Home;
