import React from "react";
import Image from "next/image";

function truncateToDecimal(num, fixed) {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}

const CarouselSlide = ({ item, handleSlideClick, slidesToShow }) => {
  const width = truncateToDecimal(100 / Number(slidesToShow), 2);

  return (
    <div
      style={{
        maxWidth: `${width}%`,
        flexbasis: `${width}%`,
      }}
      className={`bg-black flex-shrink-0 flex-grow-0 p-1 text-white cursor-pointer`}
      key={item.id}
      onClick={() => handleSlideClick(item)}
    >
      <div className="w-full relative aspect-video">
        <Image
          src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
          fill={true}
          className="w-full rounded-md"
          alt="movie-slide-poster"
          priority={true}
        ></Image>
      </div>

      <h5 className="m-0 text-left truncate font-bold mt-2">{item.title}</h5>
      <p className="truncate mt-[7px] text-[13px]">{item.overview}</p>
    </div>
  );
};
export default CarouselSlide;
