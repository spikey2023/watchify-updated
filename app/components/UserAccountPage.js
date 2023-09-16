import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserAccUpdates from "./UserAccUpdates";

const UserAccountPage = () => {
  //const { auth } = useSelector((state) => state)
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="user-account-h1">Account Settings</h1>
      <div className="user-account-container">
        <aside className="useracc-left-nav">
          <Link>Account info</Link>
          <Link>Genre preferences</Link>
          <Link>My network providers</Link>
          <Link>My watched list</Link>
          <Link>Friends</Link>
        </aside>
        <main className="useracc-right-main">
          <p className="p-heading">SIGN IN DETAILS</p>
          <section className="user-section">
            <p>email:</p>
            <p className="useracc-info">email placeholder</p>
            <UserAccUpdates />
          </section>
          <section className="user-section">
            <p>password:</p>
            <p className="useracc-info">password placeholder</p>
            <Link>change password</Link>
          </section>
          <p>MY PROFILE</p>
          <section className="user-section">
            <p>username:</p>
            <p className="useracc-info">username placeholder</p>
            <Link>edit</Link>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserAccountPage;
