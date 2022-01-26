export const slideAnim = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      // stiffness: 70,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "tween",
    },
  },
};

export const mealUnderlineAnim = {
  hover: {
    width: "100%",
  },
};

export const boxShadowAnim = {
  hover: {
    "box-shadow": "0 5px 50px #ffffff63",
    transition: {
      duration: 2,
    },
  },
};

export const navHoverAnim = {
  hover: {
    color: "#be8458",
    transition: {
      duration: 0.1,
    },
  },
};
