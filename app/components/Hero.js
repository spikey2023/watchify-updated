import React from 'react';
import './Hero.css';

import bg from '../../public/bg.jpg';
import heroimg from '../../public/heroimg.jpg'

import Button from "@mui/material/Button";
import {Link } from "react-router-dom"

const Hero = () => {


  return (

      <div class="container">
      <img src={heroimg} alt="Loading"/>
      <div class="hero-text">
        
        <h1> Watchify - Your Personal Movie Universe!</h1>
        <p>Say goodbye to endless browsing on your Friday nights!</p>
          <p>Get Personalized Movie Recommendations to Watch Online Based on Your
          Preferences!</p>
          <p>Let Watchify be your movie guide and never look back!
        </p>

        <p>Discover Your Next Binge</p>
        <p>Rediscover Cinematic Gems</p>
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
    </div>

  );
};

export default Hero;