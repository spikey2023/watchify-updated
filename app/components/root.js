import React, { useState } from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import {Routes, Route } from 'react-router-dom'
import Account from "./Account";
import WatchedList from "./WatchedList";
import Home from "./Home"


const Root = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/account" element={<Account/>} />
        <Route path="/watchedlist" element={<WatchedList/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      {/* <MoviesList movies={movies} setMovies={setMovies} /> */}
      
      
    </div>
  );
};

export default Root;
