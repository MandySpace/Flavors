import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollTop(recipes) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname, recipes]);
}

export default useScrollTop;
