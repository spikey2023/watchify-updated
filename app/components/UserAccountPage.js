import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserAccUpdates from "./UserAccUpdates";
import { getUser, selectUser } from "../features/userSlice";


const UserAccountPage = () => {
  const auth = useSelector((state) => state.auth);

  //const user = useSelector(selectUser); //this is good to track multiple states
  const dispatch = useDispatch();

  //need useEffect since we're not clicking any event listeners / to call dispatch
  useEffect(() => {
    dispatch(getUser({ id: auth.user.id, token: auth.token }));
  }, []);

  //console.log("auth.user", auth.user);
  return (
    <div className="useraccount">
      {auth.user ? (
        <div>
          <h1 className="user-account-h1">Account Settings</h1>
          <div className="user-account-container">
            <aside className="useracc-left-nav">
              <Link>Account info</Link>
              <Link>Genre preferences</Link>
              <Link>My watched list</Link>
            </aside>
            <main className="useracc-right-main">
              <p className="p-heading">ACCOUNT DETAILS</p>
              <section className="user-section">
                <p>username:</p>
                <p className="useracc-info">{auth.user.username}</p>
                <Link>update</Link>
              </section>
              <section className="user-section">
                <p>email:</p>
                <p className="useracc-info">{auth.user.email}</p>
                <UserAccUpdates />
              </section>
              <section className="user-section">
                <p>password:</p>
                <p className="useracc-info">*******</p>
                <Link>update</Link>
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
