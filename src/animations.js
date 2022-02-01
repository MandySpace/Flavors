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

export const line1Anim = {
  hidden: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  show: {
    x: 0,
    y: 9,
    rotate: 135,
    transition: {
      duration: 1,
    },
  },
};

export const line1AnimBack = {
  hidden: {
    x: 0,
    y: 9,
    rotate: 135,
  },
  show: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

export const line2Anim = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const line2AnimBack = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const line3Anim = {
  hidden: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  show: {
    x: 0,
    y: -9,
    rotate: -135,
    transition: {
      duration: 1,
    },
  },
};

export const line3AnimBack = {
  hidden: {
    x: 0,
    y: -9,
    rotate: -135,
  },
  show: {
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

export const bg1Anim = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.6,
      ease: "anticipate",
    },
  },
};

export const bg1AnimBack = {
  hidden: {
    y: 0,
  },
  show: {
    y: "100%",
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "anticipate",
    },
  },
};

export const listMenuAnim = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
    },
  },
  exit: {
    opcaity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
