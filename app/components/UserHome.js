import React, {useState} from 'react'
import MoviesList from './MoviesList'

const UserHome = () => {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Movie 1",
      avg_rating: 3.75,
      rating_count: 10,
    },
    {
      id: "2",
      title: "Movie 2",
      avg_rating: 4.75,
      rating_count: 4,
    },
    {
      id: "3",
      title: "Movie 3",
      avg_rating: 3.7,
      rating_count: 10,
    },
    {
      id: "4",
      title: "Movie 4",
      avg_rating: 3.5,
      rating_count: 20,
    },
    {
      id: "5",
      title: "Movie 5",
      avg_rating: 4.9,
      rating_count: 50,
    },
    {
      id: "6",
      title: "Movie 6",
      avg_rating: 4.5,
      rating_count: 3333,
    },
    {
      id: "7",
      title: "Movie 7",
      avg_rating: 4.5,
      rating_count: 3333,
    },
    {
      id: "8",
      title: "Movie 8",
      avg_rating: 4.5,
      rating_count: 3333,
    },
    {
      id: "9",
      title: "Movie 9",
      avg_rating: 4.5,
      rating_count: 3333,
    },
    {
      id: "10",
      title: "Movie 10",
      avg_rating: 4.5,
      rating_count: 3333,
    },
    {
      id: "11",
      title: "Movie 11",
      avg_rating: 4.5,
      rating_count: 3333,
    },
    {
      id: "12",
      title: "Movie 12",
      avg_rating: 3.75,
      rating_count: 5,
    },
    {
      id: "13",
      title: "Movie 13",
      avg_rating: 4.7,
      rating_count: 20,
    },
  ]);
  return (
    <div>
      <MoviesList movies={movies} setMovies={setMovies} />
    </div>
  )
}

export default UserHome