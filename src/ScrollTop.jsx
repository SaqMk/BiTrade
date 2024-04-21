import { useEffect } from "react";
import {
    BrowserRouter as Router,
    useLocation
  } from "react-router-dom";    

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}