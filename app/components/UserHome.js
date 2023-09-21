import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesList from "./MoviesList";

const UserHome = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "kevin@aol.com";
        const response = await axios.get(`/api/getMovies?username=${username}`);

        setMovies(response.data);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {movies.length > 0 && (
        <MoviesList movies={movies} setMovies={setMovies} />
      )}
    </div>
  );
};

export default UserHome;
