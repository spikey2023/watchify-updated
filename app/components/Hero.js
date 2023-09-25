import React from 'react';
import './Hero.css';

import bg from '../../public/bg.jpg';
import bg1 from '../../public/bg1.png'
import Img from './Img'
import ContentWrapper from './ContentWrapper';


const Hero = () => {


  return (
    <div className="heroBanner">
      <div className='backdrop-img'>
        <Img src={bg1} />
        {/* <Img src={bg} className={`bg-image`} /> */}
      {/* <img src={bg} alt="background" className="bg-image" /> */}
      </div>

      <div className='opacity-layer'></div>

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
          Embark on a spectacular journey of personalized movie recommendations
          tailored to your preferences. Say goodbye to endless browsing on your
          Friday nights!Start your journey into a universe of personalized movie
          recommendations.Let Watchify be your movie guide and never look back!
        </p>
        <button className="get-started-button">Get Started now!</button>
    
      </div>
      </ContentWrapper>
    </div>

  );
};

export default Hero;