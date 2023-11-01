import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Img from "./Img";
import Casts from "./Casts";

import MovieVideos from "./MovieVideos";
//Trailer play icon
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

//format release year
import dayjs from "dayjs";

import TrailerPopup from "./TrailerPopup";

import axios from "axios";
import ContentWrapper from "./ContentWrapper";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import "./ContentWrapper.css";
import "./MovieDetails.css";



const DetailsBanner = ({ video, crew }) => {
  //pop up video trailer
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  //set data from Api call
  const [data, setData] = useState([]);
  const tmdbUrl = `https://image.tmdb.org/t/p/original`;
  const { id } = useParams();

  // const _genres = data?.genres?.map((genre) => genre.id);

  const director = data.credits?.crew?.filter((f) => f.job === "Director");
  const writer = data.credits?.crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const trailer = data.videos?.results.filter(
    (result) => result.name === "Official Trailer" || result.type === "Trailer"
  );

  const timeConversion = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_TOKEN}&append_to_response=credits,videos`
        );
        return setData(data);
        // return {... data }
      } catch (error) {
        console.error(`Error fetching movie ID: ${id}`, error);
      }
    };
    fetchMovieData();
  }, []);

  // useEffect(() => { document.body.style.backgroundColor = 'red' }, [])

  return (
    <div className="detailsBanner">
      {!!data && (
        <React.Fragment>
          <div className="backdrop-img">
            <Img src={tmdbUrl + data.backdrop_path} />
          </div>
          <div className="opacity-layer"></div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {data.poster_path ? (
                  <Img className="posterImg" src={tmdbUrl + data.poster_path} />
                ) : (
                  <Img className="posterImg" alt="no poster found" />
                )}
              </div>

              <div className="right">
                <div className="title">
                  {`${data.name || data.title} (${dayjs(
                    data.release_date
                  ).format("YYYY")})`}
                </div>
                <div className="subtitle">{data.tagline}</div>

                <div className="genres">
                  {data.genres?.map((genre) => (
                    <div key={genre.id} className="genre">
                      {genre.name}
                    </div>
                  ))}
                </div>

                <div className="playbtn">
                  <PlayCircleOutlineIcon
                    sx={{ "&:hover": { color: "#1E3CA8" } }}
                    style={{ fontSize: "3rem" }}
                    onClick={() => {
                      setShow(true);
                      setVideoId(trailer[0].key);
                    }}
                    className="playicon"
                  />
                  <span className="text">Watch Trailer</span>
                </div>

                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="description">{data.overview}</div>
                </div>

                <div className="info">
                  {data.status && (
                    <div className="infoItem">
                      <span className="text bold">Status </span>
                      <span className="text">{data.status}</span>
                    </div>
                  )}

                  {data.release_date && (
                    <div className="infoItem">
                      <span className="text bold">Release Date </span>
                      <span className="text">
                        {dayjs(data.release_date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  )}

                  {data.runtime && (
                    <div className="infoItem">
                      <span className="text bold">Runtime </span>
                      <span className="text">
                        {timeConversion(data.runtime)}
                      </span>
                    </div>
                  )}
                </div>

                {director?.length > 0 && (
                  <div className="info">
                    <span className="text bold">Director </span>
                    <span className="text">
                      {director?.map((d, i) => (
                        <span key={i}>
                          {d.name}
                          {director.length - 1 !== i && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}

                {writer?.length > 0 && (
                  <div className="info">
                    <span className="text bold">Writer </span>
                    <span className="text">
                      {writer?.map((d, i) => (
                        <span key={i}>
                          {d.name}
                          {writer.length - 1 !== i && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <TrailerPopup
              show={show}
              setShow={setShow}
              videoId={videoId}
              setVideoId={setVideoId}
            />
            <Casts data={data.credits?.cast} />
            {/* <MovieVideos data={data?.videos} /> */}
          </ContentWrapper>
        </React.Fragment>
      )}
    </div>
  );
};

export default DetailsBanner;
