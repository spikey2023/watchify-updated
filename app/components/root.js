import React, { useState } from "react";
import Header from "./Header";
import SignIn from "./SignIn";
import { Routes, Route } from "react-router-dom";
import UserAccountPage from "./UserAccountPage";
import WatchedList from "./WatchedList";
import Hero from "./Hero";
import UserHome from "./UserHome";
import Register from "./Register";
import UserUpdateGenrePref from "./UserUpdateGenrePref";
import AccountSideNav from "./AccountSideNav";
import MovieDetails from "./MovieDetails";

const Root = () => {
  return (
    <div className="header-container">
      <Header />
      <Routes>
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/userhome" element={<UserHome />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
        <Route exact path="/" element={<Hero />} />
        <Route path="/account" element={<AccountSideNav />}>
          <Route path="/account/genrepref" element={<UserUpdateGenrePref />} />
          <Route path="/account" element={<UserAccountPage />} />
          <Route path="/account/watched" element={<WatchedList />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Root;
