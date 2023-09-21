import React, { useState, Fragment } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";

import { useSelector, useDispatch } from "react-redux";
import { loggedoutUser } from "../features/userSlice"



import { NavLink, Link } from "react-router-dom";
import SignIn from "./SignIn";

const Header = () => {
  const [tabValue, settabValue] = useState();
  const dispatch = useDispatch(); 
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  const handleLogout = () => {
    // Dispatch the logout action when the logout button is clicked
    dispatch(loggedoutUser());
    console.log("logout dispatched")
  };

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0A0A0A" }}>
        <Toolbar>
          <MovieIcon />
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              paddingLeft: "0.5%",
              textDecoration: "inherit",
            }}
            color="#1E3CA8"
            component={Link}
            to={`/`}
          >
            {" "}
            WATCHIFY{" "}
          </Typography>

          <Tabs
            sx={{ marginLeft: "auto" }}
            textColor="inherit"
            //tabindicator color logic
            value={false}
            onChange={(e, tabValue) => settabValue(tabValue)}
            // tab indicatorColor=to match theme
            TabIndicatorProps={{ style: { background: "#1E3CA8" } }}
          >
            <Tab label="Home" value="/" component={Link} to={`/userhome`} />
            <Tab
              label="Account"
              value="account"
              component={Link}
              to={`/account`}
            />
          </Tabs>

{/* Make SignIn and Log out appear conditionally */}
{ isLoggedIn ? (
            <Button
            variant="contained"
            sx={{ background: "#1E3CA8", marginLeft: "auto" }}
            onClick={handleLogout}
            component={Link}
            to={`/`}
          >
            Logout
          </Button>
          ) : (
          <Button
            variant="contained"
            sx={{ background: "#1E3CA8", marginLeft: "auto" }}
            component={Link}
            to={`/login`}
          >
            Sign In
          </Button>)}

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
