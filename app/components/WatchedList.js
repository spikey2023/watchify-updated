import React from "react";
//import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

const WatchedList = () => {
  return (
    <div className="useraccount">
      {/* {auth.user ? ( */}
      <div>
        <h1 className="user-account-h1">My Account</h1>
        <div className="user-watched-container">
          <aside className="useracc-left-nav">
            <Link className="account-link" to="/account">
              Account info
            </Link>
            <Link className="genrepref-link" to="/account/genrepref">
              Genre preferences
            </Link>
            <Link className="watched-link" to="/account/watched">
              My watched list
            </Link>
          </aside>
          <main className="useracc-right-main">
            <p className="p-heading">MY WATCHED MOVIES LIST:</p>
            <section className="user-section"></section>
          </main>
        </div>
      </div>
      {/* ) : (
        <div>Loading ....</div>
      )} */}
    </div>
  );
};

export default WatchedList;
