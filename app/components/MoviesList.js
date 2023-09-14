import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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

const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};

const MoviesList = ({ movies, setMovies }) => {
  const [hasAnimated, setHasAnimated] = useState(() => {
    return movies.map((_, index) => {
      if (
        index === movies.length - 1 ||
        index === movies.length - 2 ||
        index === 0 ||
        index === 1 ||
        index === 2
      ) {
        return false;
      }
      return true;
    });
  });

  useEffect(() => {
    // Animation timers for first 5 cards. Starting with .length-2
    const lastIndex = movies.length - 1;
    const secondLastIndex = movies.length - 2;
    const indicesToAnimate = [secondLastIndex, lastIndex, 0, 1, 2];

    const timers = indicesToAnimate.map((index, i) => {
      return setTimeout(() => {
        setHasAnimated((prev) => {
          const newArr = [...prev];
          newArr[index] = true;
          return newArr;
        });
      }, i * 200);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [movies]);

  const handleRatingChange = (id, newRating) => {
    // Logic for updating the rating and count
    const movie = movies.find((movie) => movie.id === id);
    if (!movie) return;

    const newRatingCount = movie.rating_count + 1;
    const newAvgRating =
      (movie.avg_rating * movie.rating_count + newRating) / newRatingCount;

    // Update the state
    setMovies((prevMovies) => {
      return prevMovies.map((movie) => {
        if (movie.id !== id) return movie;

        return {
          ...movie,
          rating_count: newRatingCount,
          avg_rating: newAvgRating,
        };
      });
    });
  };

  return (
    <>
      {" "}
      <h1 className="card-title-popular">Most Popular Movies</h1>
      <div>
        <Swiper
          effect={"coverflow"}
          direction="horizontal"
          slidesPerView={3}
          spaceBetween={24}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          keyboard={true}
          mousewheel={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // breakpoints={{
          //   640: {
          //     slidesPerView: 2,
          //     spaceBetween: 20,
          //   },
          //   768: {
          //     slidesPerView: 4,
          //     spaceBetween: 30,
          //   },
          //   1024: {
          //     slidesPerView: 5,
          //     spaceBetween: 30,
          //   },
          // }}
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
            <SwiperSlide
              key={movie.id}
              className={`swiper-slide ${
                hasAnimated[index] ? "animate-slide" : ""
              }`}
            >
              <h3>{movie.title}</h3>
              <p>{`Average Rating: ${roundToHalf(movie.avg_rating)}`}</p>
              <p>{`Total Votes: ${movie.rating_count}`}</p>
              <MovieRating
                value={movie.avg_rating}
                onChange={(newRating) =>
                  handleRatingChange(movie.id, newRating)
                }
              />
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
