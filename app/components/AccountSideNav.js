import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
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
            <NavLink className="account-link" to="/account">
              Account Details
            </NavLink>
            <NavLink className="genrepref-link" to="/account/genrepref">
              Genre preferences
            </NavLink>
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
