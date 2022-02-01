import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  line1Anim,
  line2Anim,
  line3Anim,
  line1AnimBack,
  line2AnimBack,
  line3AnimBack,
  bg1Anim,
  bg1AnimBack,
  listMenuAnim,
} from "../animations";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const menuClickHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="hamburger">
      <div
        className="ham-menu ham-menu-active"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <motion.div
          variants={isMenuOpen ? line1Anim : line1AnimBack}
          initial="hidden"
          animate="show"
          className="ham-line line-1"
        ></motion.div>
        <motion.div
          variants={isMenuOpen ? line2Anim : line2AnimBack}
          initial="hidden"
          animate="show"
          className="ham-line line-2"
        ></motion.div>
        <motion.div
          variants={isMenuOpen ? line3Anim : line3AnimBack}
          initial="hidden"
          animate="show"
          className="ham-line line-3"
        ></motion.div>
      </div>

      <motion.div
        variants={isMenuOpen ? bg1Anim : bg1AnimBack}
        initial="hidden"
        animate="show"
        className="menu-bg"
      ></motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            variants={listMenuAnim}
            initial="hidden"
            animate="show"
            exit="exit"
            className="menu-mobile-list"
            onClick={menuClickHandler}
          >
            <li onClick={menuClickHandler}>
              <Link to="/">
                <span>01.</span> Home
                <motion.div
                  className={`line ${pathname === "/" ? "active" : ""}`}
                />
              </Link>
            </li>
            <li onClick={menuClickHandler}>
              <Link to="/recipes">
                <span>02.</span> Recipes
                <motion.div
                  className={`line ${pathname === "/recipes" ? "active" : ""}`}
                />
              </Link>
            </li>
            {/* <li onClick={menuClickHandler}>
              <Link to="/about">
                <span>03.</span> About
                <motion.div
                  className={`line ${pathname === "/about" ? "active" : ""}`}
                />
              </Link>
            </li> */}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Hamburger;
