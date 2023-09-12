import React from "react";
import MoviesList from "./MoviesList";

const Root = () => {
  const movies = [
    { id: "1", title: "Movie 1", overview: "Overview 1" },
    { id: "2", title: "Movie 2", overview: "Overview 2" },
    { id: "3", title: "Movie 3", overview: "Overview 3" },
    { id: "4", title: "Movie 4", overview: "Overview 4" },
    { id: "5", title: "Movie 5", overview: "Overview 5" },
    { id: "6", title: "Movie 6", overview: "Overview 6" },
    { id: "7", title: "Movie 7", overview: "Overview 7" },
    { id: "8", title: "Movie 8", overview: "Overview 8" },
    { id: "9", title: "Movie 9", overview: "Overview 9" },
    { id: "10", title: "Movie 10", overview: "Overview 10" },
    { id: "11", title: "Movie 11", overview: "Overview 11" },
    { id: "12", title: "Movie 12", overview: "Overview 12" },
    { id: "13", title: "Movie 13", overview: "Overview 13" },
  ];

  return (
    <>
      <MoviesList movies={movies} />
    </>
  );
};

export default Root;
