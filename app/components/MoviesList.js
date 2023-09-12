import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Mousewheel,
  Pagination,
  Keyboard,
  Virtual,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MovieList.css";

const MoviesList = ({ movies }) => {
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

  return (
    <>
      {" "}
      <h1 className="card-title-popular">Most Popular Movies</h1>
      <Swiper
        direction="horizontal"
        slidesPerView={5}
        grabCursor={true}
        centeredSlides={true}
        effect="coverflow"
        pagination={{ clickable: true }}
        loop={true}
        keyboard={true}
        mousewheel={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Mousewheel, Pagination, Keyboard, Navigation]}
      >
        {" "}
        {movies.map((movie, index) => (
          <SwiperSlide
            key={movie.id}
            className={`swiper-slide ${
              hasAnimated[index] ? "animate-slide" : ""
            }`}
          >
            <div className="movie-card">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </>
  );
};

export default MoviesList;
