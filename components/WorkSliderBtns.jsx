"use client";

import * as React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyles = "",
  btnStyles = "",
  iconsStyles = "",
}) => {
  const swiper = useSwiper();

  const handlePrev = React.useCallback(() => {
    swiper?.slidePrev();
  }, [swiper]);

  const handleNext = React.useCallback(() => {
    swiper?.slideNext();
  }, [swiper]);

  if (!swiper) return null;

  return (
    <div className={containerStyles}>
      <button
        type="button"
        className={btnStyles}
        onClick={handlePrev}
        aria-label="Slide anterior"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>

      <button
        type="button"
        className={btnStyles}
        onClick={handleNext}
        aria-label="Próximo slide"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
