import React, { useState } from "react";
import MoviesList from "./MoviesList";

const UserHome = () => {
  const [movies, setMovies] = useState([
    {
      tmdb_id: "1",
      title: "Movie 1",
      vote_average: 3.75,
      vote_count: 10,
    },
    {
      tmdb_id: "2",
      title: "Movie 2",
      vote_average: 4.75,
      vote_count: 4,
    },
    {
      tmdb_id: "3",
      title: "Movie 3",
      vote_average: 3.7,
      vote_count: 10,
    },
    {
      tmdb_id: "4",
      title: "Movie 4",
      vote_average: 3.5,
      vote_count: 20,
    },
    {
      tmdb_id: "5",
      title: "Movie 5",
      vote_average: 4.9,
      vote_count: 50,
    },
    {
      tmdb_id: "6",
      title: "Movie 6",
      vote_average: 4.5,
      vote_count: 3333,
    },
    {
      tmdb_id: "7",
      title: "Movie 7",
      vote_average: 4.5,
      vote_count: 3333,
    },
    {
      tmdb_id: "8",
      title: "Movie 8",
      vote_average: 4.5,
      vote_count: 3333,
    },
    {
      tmdb_id: "9",
      title: "Movie 9",
      vote_average: 4.5,
      vote_count: 3333,
    },
    {
      tmdb_id: "10",
      title: "Movie 10",
      vote_average: 4.5,
      vote_count: 3333,
    },
    {
      tmdb_id: "11",
      title: "Movie 11",
      vote_average: 4.5,
      vote_count: 3333,
    },
    {
      tmdb_id: "12",
      title: "Movie 12",
      vote_average: 3.75,
      vote_count: 5,
    },
    {
      tmdb_id: "13",
      title: "Movie 13",
      vote_average: 4.7,
      vote_count: 20,
    },
  ]);
  return (
    <div>
      <MoviesList movies={movies} setMovies={setMovies} />
    </div>
  );
};

export default UserHome;
