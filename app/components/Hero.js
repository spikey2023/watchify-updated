import React from "react";
import "./Hero.css";

import bg1 from "../../public/bg1.jpg"
import bg2 from "../../public/bg2.jpg"
import bg3 from "../../public/bg3.jpg"
import bg4 from "../../public/bg4.jpg"
import bg5 from "../../public/bg5.jpeg"
import bg6 from "../../public/bg6.jpeg"

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  let bg_imgs = [bg1, bg2, bg3, bg4, bg5, bg6]
  let bg_img = bg_imgs[Math.floor(Math.random()*bg_imgs.length)]
  return (
    <>
              <div className="backdrop-img">
            <img src={bg_img} alt="Loading" />
          </div>
          <div className="opacity-layer"> </div>

    <div className="container">
      {/* <img src={heroimg} alt="Loading" /> */}
      <div className="hero-text">
        <h1> 
          <span> WATCHIFY</span> - Your Personal Movie Universe!</h1>
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
    </>
  );
};

export default Hero;
