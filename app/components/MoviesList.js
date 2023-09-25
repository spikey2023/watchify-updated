import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import {
  Mousewheel,
  Pagination,
  Keyboard,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "./MovieList.css";
import MovieRating from "./Rating";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};

const MoviesList = ({ movies, setMovies, fetchData }) => {
  const [backdrops, setBackdrops] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);

  const username = useSelector((state) => state.auth.user.username);
  const userId = useSelector((state) => state.auth.user.id);

  const openConfirmationDialog = (movie, rating) => {
    setSelectedMovie(movie);
    setSelectedRating(rating);
    setOpenDialog(true);
  };

  // const handleRatingChange = async (id, newRating) => {
  //   const movie = movies.find((movie) => movie.tmdb_id === id);
  //   if (!movie) return;

  //   const isConfirmed = window.confirm(
  //     `Are you sure you want to rate "${movie.title}" ${newRating} stars?`
  //   );

  //   if (!isConfirmed) return; // Return early if the user cancels.

  //   const newRatingCount = movie.vote_count + 1;
  //   const newAvgRating =
  //     (movie.vote_average * movie.vote_count + newRating) / newRatingCount;

  //   try {
  //     await axios.post("/api/updateRating", {
  //       userId,
  //       movieTmdbId: id,
  //       rating: newRating,
  //     });
  //     fetchData(); // Refetch after rate
  //   } catch (error) {
  //     console.error("Error updating rating:", error);
  //   }

  //   setMovies((prevMovies) => {
  //     return prevMovies.map((movie) => {
  //       if (movie.tmdb_id !== id) return movie;
  //       return {
  //         ...movie,
  //         vote_count: newRatingCount,
  //         vote_average: newAvgRating,
  //       };
  //     });
  //   });
  // };

  const handleRatingChange = (id, newRating) => {
    const movie = movies.find((movie) => movie.tmdb_id === id);
    if (!movie) return;

    openConfirmationDialog(movie, newRating);
  };

  const handleConfirmRating = async () => {
    if (!selectedMovie) return;
    const newRatingCount = selectedMovie.vote_count + 1;
    const newAvgRating =
      (selectedMovie.vote_average * selectedMovie.vote_count + selectedRating) /
      newRatingCount;

    try {
      await axios.post("/api/updateRating", {
        userId,
        movieTmdbId: selectedMovie.tmdb_id,
        rating: selectedRating,
      });
      fetchData(); // Refetch after rate
      setOpenDialog(false);
    } catch (error) {
      console.error("Error updating rating:", error);
    }

    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.tmdb_id !== selectedMovie.tmdb_id) return movie;
        return {
          ...movie,
          vote_count: newRatingCount,
          vote_average: newAvgRating,
        };
      });
    });
  };

  useEffect(() => {
    const fetchBackdrops = async () => {
      const newBackdrops = {};
      for (const movie of movies) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.tmdb_id}/images?api_key=7c1a02da75b25d48c10edcf2e32896b2`
          );
          const { backdrops } = response.data;
          if (backdrops && backdrops.length > 0) {
            const firstBackdrop = backdrops[0];
            newBackdrops[
              movie.tmdb_id
            ] = `https://image.tmdb.org/t/p/original${firstBackdrop.file_path}`;
          }
        } catch (error) {
          console.error(
            `Error fetching backdrop for movie ID: ${movie.tmdb_id}`,
            error
          );
        }
      }
      setBackdrops(newBackdrops);
    };

    if (movies && movies.length > 0) {
      fetchBackdrops();
    }
  }, [movies]);

  return (
    <>
      <h1 className="card-title-popular">
        Welcome <span className="fancy">{` ${username}!`}</span>
      </h1>
      <h2 className="card-title-desc">Highest Rated by Your Genre Choices:</h2>
      <div>
        <Swiper
          effect={"coverflow"}
          lazy="true"
          direction="horizontal"
          slidesPerView={"auto"}
          spaceBetween={25}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 30,
            depth: 75,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          keyboard={true}
          mousewheel={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[
            Mousewheel,
            Pagination,
            Keyboard,
            Navigation,
            EffectCoverflow,
          ]}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.tmdb_id} className={"swiper-slide"}>
              <div className="image-wrapper">
                <img
                  src={
                    backdrops[movie.tmdb_id]
                      ? backdrops[movie.tmdb_id]
                      : "placeholder.jpeg"
                  }
                  loading="lazy"
                  alt={movie.title}
                />
                <div className="movie-content">
                  <h3>{movie.title}</h3>
                  <p>
                    Genres: {movie.genres.map((genre) => genre.name).join(", ")}
                  </p>
                  <p>{`Average Rating: ${roundToHalf(movie.vote_average)}`}</p>
                  <p>{`Total Votes: ${movie.vote_count}`}</p>
                  <p>
                    <MovieRating
                      value={roundToHalf(Number(movie.vote_average) / 2)}
                      onChange={(newRating) =>
                        handleRatingChange(movie.tmdb_id, newRating * 2)
                      }
                    />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm Rating"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {`Are you sure you want to rate ${
                selectedMovie ? selectedMovie.title : ""
              } ${selectedRating} out of 10 stars?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmRating} color="primary" autoFocus>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default MoviesList;
