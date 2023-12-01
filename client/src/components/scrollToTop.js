import React from "react";

const ScrollToTop = ({ scrollUp }) => {
  return (
    <button onClick={scrollUp} className="scroll" id='scrollToTopButton'>
      Scroll to top
    </button>
  );
};

export default ScrollToTop;
