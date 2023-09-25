import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getUser } from "../features/userSlice";

const AccountSideNav = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ id: auth.user.id, token: auth.token }));
  }, []);

  return (
    <div className="useraccount">
      <h1 className="user-account-h1">My Account</h1>
      <div className="user-account-container">
        {auth.user ? (
          <aside className="useracc-left-nav">
            <Link className="account-link" to="/account">
              Account Details
            </Link>
            <Link className="genrepref-link" to="/account/genrepref">
              Genre preferences
            </Link>
            <Link className="watched-link" to="/account/watched">
              My watched list
            </Link>
          </aside>
        ) : (
          <p>please log in...</p>
        )}
        <main className="useracc-right-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AccountSideNav;
