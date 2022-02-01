import { motion } from "framer-motion";
import { navHoverAnim } from "../animations";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";

function Nav() {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === "/" ? "hero-nav" : ""}`}>
      <div className="container max-width">
        <div className="circle flex-center">
          <h1 className="logo">Flavors</h1>
        </div>

        <div className="nav">
          <ul className="nav-list">
            <motion.li
              variants={navHoverAnim}
              initial="hidden"
              whileHover="hover"
              className="nav-item"
            >
              <Link to="/">HOME</Link>
            </motion.li>
            <motion.li
              variants={navHoverAnim}
              initial="hidden"
              whileHover="hover"
              className="nav-item"
            >
              <Link to="/recipes">RECIPES</Link>
            </motion.li>
            <motion.li
              variants={navHoverAnim}
              initial="hidden"
              whileHover="hover"
              className="nav-item"
            >
              <Link to="/about-us">ABOUT US</Link>
            </motion.li>
          </ul>
        </div>
        <Hamburger />
      </div>
    </header>
  );
}

export default Nav;
