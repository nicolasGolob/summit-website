import React, { useState, useEffect} from "react";
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [iconIsVisible, setIconIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 110) {
        setIconIsVisible(true);
      } else {
        setIconIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {iconIsVisible && (
        <div onClick={scrollToTop}>
          <i className="scroll-icon fas fa-arrow-alt-circle-up"></i>
        </div>
      )}
    </div>
  );
}