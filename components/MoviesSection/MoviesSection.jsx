import React from "react";
import MovieCarousel from "../MovieCarousel/Carousel";

const MoviesSection = ({ title, movies }) => {
  console.log(movies)
  if (movies?.length === 0) {
    return null;
  }
  return (
    <div className="w-full py-8">
      <h2 className="max-w-screen-lg m-auto font-bold pb-8 text-4xl px-4">
        {title}
      </h2>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default MoviesSection;
