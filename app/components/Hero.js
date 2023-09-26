import React from "react";
import "./Hero.css";

import heroimg from "../../public/heroimg.jpg";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container">
      <img src={heroimg} alt="Loading" />

      <div className="hero-text">
        <h1> Watchify - Your Personal Movie Universe!</h1>
        <p>Say goodbye to endless browsing on your Friday nights!</p>
        <p>
          Get Personalized Movie Recommendations to Watch Online Based on Your
          Preferences!
        </p>
        <p>Let Watchify be your movie guide and never look back!</p>
        <p>Discover Your Next Binge</p>
        <p>Rediscover Cinematic Gems</p>
        <motion.div animate={{ x: 5 }} initial={true}>
          <Button
            type="submit"
            fullWidth
            className="get-started-button"
            variant="contained"
            sx={{ mt: 3, mb: 2, background: "#1E3CA8", maxWidth: "200px" }}
            component={Link}
            to={"/register"}
          >
            Get Started now!
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
