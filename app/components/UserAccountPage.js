import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserAccUpdates from "./UserAccUpdates";
import { getUser } from "../features/userSlice";

const UserAccountPage = () => {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ id: auth.user.id, token: auth.token }));
  }, []);

  return (
    <div>
      {auth.user ? (
        <div>
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
        </div>
      ) : (
        <div>Loading ....</div>
      )}
    </div>
  );
};

export default UserAccountPage;
