import { useEffect } from "react";
import { useLocation } from "react-router-dom";


//Usamos pathname de useLocation para usarlo como dependencia del useEffect

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;