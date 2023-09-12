import React from "react";
import MoviesList from "./MoviesList";

const Root = () => {
  const movies = [
    { title: "Movie 1", overview: "Overview 1" },
    { title: "Movie 2", overview: "Overview 2" },
    { title: "Movie 3", overview: "Overview 3" },
    { title: "Movie 3", overview: "Overview 3" },
    { title: "Movie 3", overview: "Overview 3" },
    { title: "Movie 3", overview: "Overview 3" },
    { title: "Movie 3", overview: "Overview 3" },
    { title: "Movie 3", overview: "Overview 3" },
    { title: "Movie 3", overview: "Overview 3" },
  ];

  return (
    <div className="root">
      <h1>Movie Carousel</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Root;
