import SlidingCards from "../SlidingCards";
import { cuisinesData } from "../../cuisinesData";

const contentInSlides = [
  [1, 11, 13, 19],
  [8, 10, 14, 23],
  [5, 12, 24, 22],
];

function Cuisines({ setCuisines }) {
  const sectionTitle = "Wide variety of cuisines to select from";

  const buttonTitle = "View All Cuisines";

  return (
    <SlidingCards
      sectionTitle={sectionTitle}
      contentInSlides={contentInSlides}
      buttonTitle={buttonTitle}
      cardsData={cuisinesData}
      data={cuisinesData}
      setState={setCuisines}
    />
  );
}

export default Cuisines;
