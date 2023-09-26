import React from "react";


import "./Cast.css";

import ContentWrapper from "./ContentWrapper";
import Img from "./Img";
import avatar from "../../public/avatar.png"

const Cast = ({ data }) => {
  const tmdbImageUrl = `https://image.tmdb.org/t/p/original`;
 return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Casts</div>
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? tmdbImageUrl + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <Img src={imgUrl} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        
      </ContentWrapper>
    </div>
  );
};

export default Cast;
