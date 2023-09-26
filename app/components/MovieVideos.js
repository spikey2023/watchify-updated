import React, { useState } from "react";

import "./MovieVideos.css";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import TrailerPopup from "./TrailerPopup";
import Img from "./Img";
import ContentWrapper from "./ContentWrapper";

const MovieVideos = ({ data }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);


  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Related Videos</div>
          <div className="videos">
            {data.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <PlayCircleOutlineIcon />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
      </ContentWrapper>
      <TrailerPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default MovieVideos;
