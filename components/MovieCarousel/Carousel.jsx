import React from "react";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import CarouselSlide from "./CarouselSlide";
import useNavigationButtons from "./useNavigationButtons";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
import CarouselButton from "./CarouselButton";
import { getWidthInNumber } from "@/utils/common";
import CarouselModal from "./CarouselModal";
import { getMovieCast } from "@/services/movieCastService";

const Carousel = ({ movies: results }) => {
  const [visibleGroup, setVisibleGroup] = useState(1);
  const [open, setIsOpen] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [selectedMovie, setSelectedMovie] = useState("");
  const carouselContainerRef = useRef(null);
  const [castDetails, setCastDetails] = useState({});
  const { showPrevious, showNext } = useNavigationButtons(
    results.length,
    visibleGroup,
    slidesToShow
  );
  const [loadingCast, setLoadingCast] = useState(false);

  useEffect(() => {
    const element = carouselContainerRef?.current;

    if (!element) return;

    const observer = new ResizeObserver(() => {
      const fullConfig = resolveConfig(tailwindConfig);
      let computedSlidesToShow = 1;
      if (screen.width >= getWidthInNumber(fullConfig.theme.screens.md)) {
        computedSlidesToShow = 3;
      }
      if (screen.width > getWidthInNumber(fullConfig.theme.screens.lg)) {
        computedSlidesToShow = 5;
      }
      setSlidesToShow(computedSlidesToShow);
      setVisibleGroup(1);
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (direction) => {
    if (direction === "left" && visibleGroup !== 1) {
      setVisibleGroup((value) => value - 1);
    } else if (
      direction === "right" &&
      visibleGroup !== Math.ceil(results.length / slidesToShow)
    ) {
      setVisibleGroup((value) => value + 1);
    }
  };

  const handleModalClose = () => {
    setSelectedMovie("");
    setIsOpen(false);
  };

  const handleSlideClick = (item) => {
    if (!castDetails[item.id]) {
      setLoadingCast(true);
      getCast(item.id);
    }
    setSelectedMovie(item);
    setIsOpen(true);
  };

  const getCast = async (id) => {
    const response = await getMovieCast(id);
    if (response.success) {
      // Show only 5 records
      const cast =
        response?.data?.cast?.length > 5
          ? response?.data.cast.slice(0, 5)
          : response?.data?.cast;
      setCastDetails({ ...castDetails, [id]: cast });
      setLoadingCast(false);
    } else {
      // log error
      setLoadingCast(false);
    }
  };

  return (
    <>
      <div
        className="group w-full m-auto flex justify-center overflow-hidden"
        id="carousel-container"
        ref={carouselContainerRef}
      >
        {showPrevious ? (
          <CarouselButton
            icon={<>&#10094;</>}
            onClickHandler={() => handleScroll("left")}
          />
        ) : (
          <div className="w-[var(--slider-padding)]"></div>
        )}

        <div
          style={{ transform: `translateX(calc(${visibleGroup - 1} * -100%))` }}
          className="flex mx-1 w-[calc(100%-2*var(--slider-padding))] transition-transform duration-200 ease-in-out"
        >
          {results.map((item) => {
            return (
              <CarouselSlide
                item={item}
                handleSlideClick={handleSlideClick}
                key={item.id}
                slidesToShow={slidesToShow}
              />
            );
          })}
        </div>
        {showNext ? (
          <CarouselButton
            icon={<>&#10095;</>}
            onClickHandler={() => handleScroll("right")}
          />
        ) : (
          <div className="w-[var(--slider-padding)]"></div>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <CarouselModal
            handleModalClose={handleModalClose}
            selectedMovie={selectedMovie}
            castDetails={castDetails}
            loadingCast={loadingCast}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Carousel;
