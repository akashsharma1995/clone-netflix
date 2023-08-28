import { useEffect, useState } from "react";

const useNavigationButtons = (results, visibleGroup, slidesToShow) => {
  const [showPrevious, setShowPrevious] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const shouldShowPrevious = () => {
    visibleGroup === 1 ? setShowPrevious(false) : setShowPrevious(true);
  };

  const shouldShowNext = () => {
    if (visibleGroup < Math.ceil(results / slidesToShow)) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
  };

  useEffect(() => {
    shouldShowPrevious();
    shouldShowNext();
  }, [results, visibleGroup, slidesToShow]);

  return {
    showPrevious,
    showNext,
  };
};

export default useNavigationButtons;