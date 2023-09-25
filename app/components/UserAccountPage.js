import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import UserAccUpdates from "./UserAccUpdates";
import { getUser } from "../features/userSlice";

const UserAccountPage = () => {
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
              <p className="p-heading">ACCOUNT DETAILS</p>
              <section className="user-section">
                <p>username:</p>
                <p className="useracc-info">{auth.user.username}</p>
                <UserAccUpdates username={auth.user.username} />
              </section>
              <section className="user-section">
                <p>email:</p>
                <p className="useracc-info">{auth.user.email}</p>
                <UserAccUpdates email={auth.user.email} />
              </section>
              <section className="user-section">
                <p>password:</p>
                <p className="useracc-info">*******</p>
                <UserAccUpdates password={auth.user.password} />
              </section>
            </main>
          </div>
        </div>
      ) : (
        <div>Loading ....</div>
      )}
    </div>
  );
};

export default UserAccountPage;
