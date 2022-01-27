import "./sass/main.scss";
import Home from "./Pages/Home";
import Recipes from "./Pages/Recipes";
import RecipeInfo from "./Pages/RecipeInfo";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useScrollTop from "./Components/scrollTop";

function App() {
  const [recipes, setRecipes] = useState(null);
  const [cuisines, setCuisines] = useState("");
  const [diets, setDiets] = useState("");
  const [meals, setMeals] = useState("");

  useEffect(() => {
    localStorage.removeItem("suggestedRecipes");
  }, []);

  useScrollTop(recipes);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setCuisines={setCuisines}
              setDiets={setDiets}
              setMeals={setMeals}
            />
          }
        />
        <Route
          path="/recipes"
          element={
            <Recipes
              recipes={recipes}
              setRecipes={setRecipes}
              setCuisines={setCuisines}
              setDiets={setDiets}
              setMeals={setMeals}
              cuisines={cuisines}
              meals={meals}
              diets={diets}
            />
          }
        />
        <Route path="/recipes/*" element={<RecipeInfo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
