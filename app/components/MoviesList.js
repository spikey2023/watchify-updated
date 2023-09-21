import React, { useRef, useState, useEffect } from "react";
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
// import infinityWarImage from "./infinitywar.jpeg";

const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};

const MoviesList = ({ movies, setMovies }) => {
  const handleRatingChange = (id, newRating) => {
    // Logic for updating the rating and count
    const movie = movies.find((movie) => movie.tmdb_id === id);
    if (!movie) return;

    const newRatingCount = movie.vote_count + 1;
    const newAvgRating =
      (movie.vote_average * movie.vote_count + newRating) / newRatingCount;

    // Update the state
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.tmdb_id !== id) return movie;

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
      try {
        const updatedMovies = await Promise.all(
          movies.map(async (movie) => {
            try {
              const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${movie.tmdb_id}/images?api_key=7c1a02da75b25d48c10edcf2e32896b2`
              );
              const { backdrops } = response.data;
              let backdropUrl = "";
              if (backdrops && backdrops.length > 0) {
                const firstBackdrop = backdrops[0];
                backdropUrl = `https://image.tmdb.org/t/p/original${firstBackdrop.file_path}`;
              }

              // Extract the desired backdrop URL from the response data
              // const backdropUrl = "" + ; // Replace with actual logic to extract URL from response.data

              return {
                ...movie,
                backdrop: backdropUrl,
              };
            } catch (error) {
              console.error(
                `Error fetching backdrop for movie ID: ${movie.tmdb_id}`,
                error
              );
              return movie; // return original movie if fetching backdrop fails
            }
          })
        );

        setMovies(updatedMovies);
      } catch (error) {
        console.error("Error fetching backdrops:", error);
      }
    };

    if (movies && movies.length > 0) {
      fetchBackdrops();
    }
  }, [movies, setMovies]);

  return (
    <>
      {" "}
      <h1 className="card-title-popular">Most Popular Movies</h1>
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
          {" "}
          {movies.map((movie, index) => (
            <SwiperSlide key={movie.tmdb_id} className={"swiper-slide"}>
              <div className="image-wrapper">
                <img
                  src={movie.backdrop ? movie.backdrop : "placeholder.jpeg"}
                  loading="lazy"
                  alt={movie.title}
                />
                <div className="movie-content">
                  <h3>{movie.title}</h3>
                  <p>{`Average Rating: ${roundToHalf(movie.vote_average)}`}</p>
                  <p>{`Total Votes: ${movie.vote_count}`}</p>
                  <p>
                    <MovieRating
                      value={Number(movie.vote_average)}
                      onChange={(newRating) =>
                        handleRatingChange(movie.tmdb_id, newRating)
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
      </div>
    </>
  );
};

export default MoviesList;
