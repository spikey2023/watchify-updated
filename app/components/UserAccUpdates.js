import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "react-router-dom";
import { Stack, TextField } from "@mui/material"

const UserAccountPage = () => {
  //const { auth } = useSelector((state) => state)
  const dispatch = useDispatch();
	
  return (
    <Stack>
      <h1>Account info</h1>
      <div className="user-account-container">
        <aside className="useracc-left-nav">
          <Link>Genre preferences</Link>
          <Link>My network providers</Link>
          <Link>My watched list</Link>
          <Link>Friends</Link>
        </aside>
        <main className="useracc-right-main">
          <p>username:</p>
          <p>username placeholder</p>
          <Link>edit</Link>
          <p>email:</p>
          <p>email placeholder</p>
          <Link>edit</Link>
          <p>password:</p>
          <p>password placeholder</p>
          <Link>edit</Link>
        </main>
      </div>
    </Stack>
  );
};

export default UserAccountPage;
