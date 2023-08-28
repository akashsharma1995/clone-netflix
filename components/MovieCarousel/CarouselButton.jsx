import React from "react";

const CarouselButton = ({ onClickHandler, icon }) => {
  return (
    <div
      className="w-[var(--slider-padding)] z-10 text-slate-300 hover:text-white cursor-pointer flex items-center justify-center my-1 bg-black/25 group-hover:bg-black/50 text-3xl"
      onClick={onClickHandler}
    >
      {icon}
    </div>
  );
};

export default CarouselButton;
