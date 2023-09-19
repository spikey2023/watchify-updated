import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserAccUpdates from "./UserAccUpdates";
// import { getUser } from "../app/store/userSlice.js"
import { getUser, selectUser } from "../features/userSlice";

const UserAccountPage = () => {
  const user = useSelector((state) => state.user);

  //? const user = useSelector(selectUser) //this is good to track multiple states
  const dispatch = useDispatch();

  //need useEffect since we're not clicking any event listeners / to call dispatch
  useEffect(() => {
    dispatch(getUser(user.id));
  }, {});

  console.log(user);
  return (
    <div>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {/* {!user.loading && user.user.length ? (



      ) : null } */}
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
