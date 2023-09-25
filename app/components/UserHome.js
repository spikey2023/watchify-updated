import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import MoviesList from "./MoviesList";

const UserHome = () => {
  const [movies, setMovies] = useState([]);
  const userId = useSelector((state) => state.auth.user.id);

  const fetchData = async () => {
    try {
      if (userId) {
        const response = await axios.get(`/api/getMovies?userId=${userId}`);
        setMovies(response.data);
      }
    } catch (error) {
      console.error("An error occurred while fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  return (
    <div>
      {movies.length > 0 && (
        <MoviesList
          movies={movies}
          setMovies={setMovies}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default UserHome;
