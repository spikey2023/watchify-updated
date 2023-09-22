// import React from 'react'
// import "./Hero.css";

// import bg from "./assets/tfjsmoviemodel/bg.jpg"


// let imageStyle = {
//   height: "350px",
//   width: "600px",
//   backgroundImage:
//   bg,
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   color: "white", 
// };



// const Hero = () => {
//   return (
//     <div>
//         <img src={bg} alt="bg"/> 
//         <img src={require('../../public/bg.jpg')} />
//         <div className="watchify-top">
//           <h1 className= "watchify-header">
//           Welcome to Watchify- Your Personal movie 
//           Universe!
//             </h1>
//             <div
//             className = "image"
//             style = {{
//                height: "350px",
//                width: "550px",
//                backgroundImage:
//                'url("./../public/bg.jpg")',
//                backgroundSize: "contain",
//                backgroundRepeat: "no-repeat",
//             }}
//          ></div>
//             <h3>
//             Get Personalized Movie recommendations to watch online 
//           base on your preferences!
//           Discover Your Next Binge

//           Embark on a spectacular journey of personalized movie recommendations tailored to your preferences. Say goodbye to endless browsing on your Friday nights!
//             </h3>

//          Get Started now!
         
//           Sign Up
//           Rediscover Cinematic Gems
//           Join Watchify
//           Start your journey into a universe of personalized movie recommendations. Let Watchify be your movie guide and never look back!
       
//         </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import './Hero.css';

import bg from '../../public/bg.jpg';
import Img from './Img'
import ContentWrapper from './ContentWrapper';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className='backdrop-img'>
        <Img src={bg} className={`bg-image`} />
      {/* <img src={bg} alt="background" className="bg-image" /> */}
      </div>

      <div className='opacity-layer'></div>
      <div className="watchify-top">
        <h1 className="watchify-header">
          Welcome to Watchify - Your Personal Movie Universe!
        </h1>
        {/* <div
          className="image"
          style={{
            backgroundImage: `url(${require('../../public/bg.jpg')})`,
          }}
        ></div> */}
        <h3>
          Get Personalized Movie Recommendations to Watch Online Based on Your
          Preferences!
        </h3>
        <p>Discover Your Next Binge</p>
        <p>
          Embark on a spectacular journey of personalized movie recommendations
          tailored to your preferences. Say goodbye to endless browsing on your
          Friday nights!
        </p>
        <button className="get-started-button">Get Started now!</button>
        <div className="signup-options">
          <button className="signup-button">Sign Up</button>
          <p>Rediscover Cinematic Gems</p>
          <button className="join-button">Join Watchify</button>
        </div>
        <p>
          Start your journey into a universe of personalized movie
          recommendations. Let Watchify be your movie guide and never look back!
        </p>
      </div>
    </div>
  );
};

export default Hero;