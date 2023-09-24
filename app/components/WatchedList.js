import React from "react";
import Link from '@mui/material/Link';

const WatchedList = () => {
  return (
    <div className="useraccount">
      {/* {auth.user ? ( */}
      <div>
        <h1 className="user-account-h1">My Account</h1>
        <div className="user-watched-container">
          <aside className="useracc-left-nav">
          <Link className="account-link" href="/account" underline="hover">
                Account info
              </Link>
              <Link
                className="genrepref-link"
                href="/account/genrepref"
                underline="hover"
              >
                Genre preferences
              </Link>
              <Link
                className="watched-link"
                href="/account/watched"
                underline="hover"
              >
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
