import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../features/userSlice";

const AccountSideNav = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ id: auth.user.id, token: auth.token }));
  }, []);

  return (
    <div className="useraccount">
      {auth.user ? (
        <div>
          <h1 className="user-account-h1">My Account</h1>
          <div className="user-account-container">
            <aside className="useracc-left-nav">
              <Link className="account-link" to="/accountDetails">
                Account Details
              </Link>
              <Link className="genrepref-link" to="/account/genrePrefs">
                Genre preferences
              </Link>
              <Link className="watched-link" to="/account/watched">
                My watched list
              </Link>
            </aside>
            <main className="useracc-right-main"></main>
          </div>
        </div>
      ) : (
        <div>Loading ....</div>
      )}
    </div>
  );
};

export default AccountSideNav;
