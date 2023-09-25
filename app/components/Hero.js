import React from 'react';
import './Hero.css';

import bg from '../../public/bg.jpg';
import bg1 from '../../public/bg1.png'
import Img from './Img'
import ContentWrapper from './ContentWrapper';

import Button from "@mui/material/Button";
import { NavLink, Link } from "react-router-dom"

const Hero = () => {


  return (
    <div className="heroBanner">
      <div className='hero-img'>
        {/* <Img src={bg1} /> */}
        {/* <Img src={bg} className={`bg-image`} /> */}
      {/* <img src={bg} alt="background" className="bg-image" /> */}
      </div>

      {/* <div className='opacity-layer'></div> */}

    <ContentWrapper>
      <div className="heroBannerContent">
        <h1 className="watchify-header">
          Welcome to Watchify - Your Personal Movie Universe!
        </h1>
        <h3>
          Get Personalized Movie Recommendations to Watch Online Based on Your
          Preferences!
        </h3>
        <p>Discover Your Next Binge</p>
        <p>Rediscover Cinematic Gems</p>
        <p>
          Say goodbye to endless browsing on your
          Friday nights!Start your journey into a universe of personalized movie
          recommendations.Let Watchify be your movie guide and never look back!
        </p>
            <Button
                type="submit"
                fullWidth
                className="get-started-button"
                variant="contained"
                sx={{ mt: 3, mb: 2, background: "#1E3CA8" , maxWidth: '200px'}}
                component={Link}
                to={"/register"}
              >
                Get Started now!
              </Button>
  
      </div>
      </ContentWrapper>
    </div>

  );
};

export default Hero;