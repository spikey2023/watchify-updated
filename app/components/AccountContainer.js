import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import UserAccountPage from "./UserAccountPage";
import UserUpdateGenrePref from "./UserUpdateGenrePref";
import AccountSideNav from "./AccountSideNav";
import { getUser } from "../features/userSlice";

const AccountContainer = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ id: auth.user.id, token: auth.token }));
  }, []);

  return (
    <div className="account-container">
      <h1 className="user-account-h1">My Account</h1>
      <div className="user-account-container">
        <aside className="useracc-left-nav">
          <AccountSideNav />
        </aside>
        <main className="useracc-right-main">
          <UserAccountPage />
          <UserUpdateGenrePref />
          {/* <Route exact path="/watchedlist" element={<WatchedList />} /> */}
        </main>
      </div>
    </div>
  );
};

export default AccountContainer;
