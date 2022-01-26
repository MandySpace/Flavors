import SlidingCards from "../SlidingCards";
import { mealsData } from "../../mealsData";

function Meals({ setMeals }) {
  const contentInSlides = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
  ];

  const sectionTitle = "Choose from different Meal Types";

  const buttonTitle = "View All Meals";

  return (
    <SlidingCards
      sectionTitle={sectionTitle}
      contentInSlides={contentInSlides}
      buttonTitle={buttonTitle}
      cardsData={mealsData}
      data={mealsData}
      setState={setMeals}
    />
  );
}

export default Meals;
