import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";

const MoviesList = ({ movies }) => {
  return (
    <Swiper
      direction="horizontal"
      spaceBetween={50}
      slidesPerView={5}
      pagination={{ clickable: true }}
      mousewheel={true}
      modules={[Mousewheel, Pagination]}
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <div className="movie-card">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MoviesList;
