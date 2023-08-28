"use client";
import React from "react";
import Banner from "./Banner";
import Divider from "./UI/Divider";
import MoviesSection from "./MoviesSection/MoviesSection";

const Home = ({ movies }) => {
  return (
    <>
      <Banner />
      <Divider />
      <MoviesSection movies={movies} title="Top Rated Movies" />
      <Divider />
    </>
  );
};

export default Home;
