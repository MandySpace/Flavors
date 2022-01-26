import HomeCard from "./HomeCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { slideAnim } from "../animations";
import chevron_right from "../img/svgs/chevron_right.svg";
import chevron_left from "../img/svgs/chevron_left.svg";
import { useNavigate } from "react-router-dom";

function SlidingCards({
  sectionTitle,
  contentInSlides,
  buttonTitle,
  cardsData,
  data,
  setState,
}) {
  const navigate = useNavigate();

  const [slide, setSlide] = useState(0);

  const onLeftArrowClickHandler = () => {
    slide === 0 ? setSlide(2) : setSlide((prevSlide) => prevSlide - 1);
  };

  const onRightArrowClickHandler = () => {
    slide === 2 ? setSlide(0) : setSlide((prevSlide) => prevSlide + 1);
  };

  const dotClickHandler = (e) => {
    setSlide(+e.target.dataset.id);
  };

  return (
    <section className="cuisine">
      <h2 className="cuisine-title">{sectionTitle}</h2>
      <div className="cuisine-component flex-center">
        <div className="left-arrow" onClick={onLeftArrowClickHandler}>
          <img src={chevron_left} alt="left arrow svg" />
        </div>
        <div className="cuisine-slides max-width">
          <AnimatePresence exitBeforeEnter initial={false}>
            {contentInSlides.map((content, index) => {
              return (
                slide === index && (
                  <motion.div
                    variants={slideAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={`slide${index}`}
                    className="cuisine-cards"
                  >
                    {cardsData.map((cuisine, i) => {
                      if (content.includes(i)) {
                        return (
                          <HomeCard
                            key={i}
                            title={cuisine.name}
                            description={cuisine.description}
                            image={cuisine.image}
                            data={cuisine.name}
                            setState={setState}
                          />
                        );
                      }
                      return null;
                    })}
                  </motion.div>
                )
              );
            })}
          </AnimatePresence>
        </div>
        <div className="right-arrow" onClick={onRightArrowClickHandler}>
          <img src={chevron_right} alt="right arrow svg" />
        </div>
      </div>
      <div className="dots-container">
        <div
          className={`dot ${slide === 0 ? "dot-active" : 0}`}
          data-id="0"
          onClick={dotClickHandler}
        ></div>
        <div
          className={`dot ${slide === 1 ? "dot-active" : 0}`}
          data-id="1"
          onClick={dotClickHandler}
        ></div>
        <div
          className={`dot ${slide === 2 ? "dot-active" : 0}`}
          data-id="2"
          onClick={dotClickHandler}
        ></div>
      </div>
      <button
        className="cuisine-cta btn-square"
        onClick={() => navigate(`/recipes`)}
      >
        {buttonTitle}
      </button>
    </section>
  );
}

export default SlidingCards;
