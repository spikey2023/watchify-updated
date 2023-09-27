// import React, { useState, Fragment } from "react";
// import { AppBar, Typography, Toolbar, Tabs, Tab, Button } from "@mui/material";
// import MovieIcon from "@mui/icons-material/Movie";

// import { useSelector, useDispatch } from "react-redux";
// import { loggedoutUser } from "../features/userSlice"


// import { Link } from "react-router-dom";


// const Header = () => {
//   const loggedIn = window.localStorage.getItem("isLoggedIn")
//   const [tabValue, setTabValue] = useState(false);
//   const dispatch = useDispatch(); 
 
//   //use userId to to update logout and signin
//   const userId = useSelector((state) => state.auth.user.id);

//   const handleLogout = () => {
//     // Dispatch the logout action when the logout button is clicked
//     dispatch(loggedoutUser());
//     window.localStorage.setItem("isLoggedIn", false);
//     console.log("logout dispatched")
//   };

//   return (
    
//     <React.Fragment>
//       <AppBar sx={{ background: "#0A0A0A", zIndex:0}}>
//         <Toolbar variant="dense">
//           <MovieIcon />
//           <Typography
//             sx={{
//               fontSize: "2rem",
//               fontWeight: "bold",
//               paddingLeft: "0.5%",
//               textDecoration: "inherit",
//             }}
//             color="#1E3CA8"
//             component={Link}
//             to={`${ userId ? `/userhome`:`/`}`}
//           >
//             {" "}
//             WATCHIFY{" "}
//           </Typography>
// {/* Make SignIn and Log out appear conditionally if user is logged in */}
// { userId ? (
// <>
//             <Tabs
//             sx={{ marginLeft: "auto" }}
//             textColor="inherit"
//             //tabindicator color logic
//             value={tabValue}
//             onChange={(e, tabValue) => setTabValue(tabValue)}
//             // tab indicatorColor=to match theme
//             TabIndicatorProps={{ style: { background: "#1E3CA8" } }}

//           >
//             <Tab 
//               label="Home" 
//               value="userhome" 
//               component={Link} 
//               to={`/userhome`} />
//             <Tab
//               label="Account"
//               value="account"
//               component={Link}
//               to={`/account`}
//             />
//           </Tabs>
//             <Button
//             variant="contained"
//             sx={{ background: "#1E3CA8" }}
//             onClick={handleLogout}
//             component={Link}
//             to={`/`}
//           >
//             Logout
//           </Button>
//           </>
//           ) : (
//           <Button
//             variant="contained"
//             sx={{ background: "#1E3CA8", marginLeft: "auto" }}
//             component={Link}
//             to={`/login`}
//           >
//             Sign In
//           </Button>)}

//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useMediaQuery } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { loggedoutUser } from "../features/userSlice";
// import { Link } from "react-router-dom";
// import { styled } from "@mui/system";
// import MovieIcon from "@mui/icons-material/Movie";

// const StyledTabs = styled(Tabs)(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "0.5rem",
//     padding: "0.5rem", 
//     borderRadius: "0.5rem", 

//     borderBottom: "2px solid #1E3CA8",},
// }));

// const Header = () => {
//   const loggedIn = window.localStorage.getItem("isLoggedIn");
//   const [tabValue, setTabValue] = useState(false);
//   const dispatch = useDispatch();

//   const userId = useSelector((state) => state.auth.user.id);

//   const handleLogout = () => {
//     dispatch(loggedoutUser());
//     window.localStorage.setItem("isLoggedIn", false);
//     console.log("logout dispatched");
//   };

//   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

//   return (
//     <React.Fragment>
//       <AppBar sx={{ background: "#0A0A0A", zIndex: 0 }}>
//         <Toolbar variant="dense">
//           <MovieIcon />
//           <Typography
//             sx={{
//               fontSize: "2rem",
//               fontWeight: "bold",
//               paddingLeft: "0.5%",
//               textDecoration: "inherit",
//             }}
//             color="#1E3CA8"
//             component={Link}
//             to={`${userId ? `/userhome` : `/`}`}
//           >
//             WATCHIFY
//           </Typography>

//           {userId ? (
//             <>
//               <StyledTabs
//                 sx={{ marginLeft: "auto" }}
//                 textColor="inherit"
//                 value={tabValue}
//                 onChange={(e, tabValue) => setTabValue(tabValue)}
//                 TabIndicatorProps={{ style: { background: "#1E3CA8" } }}
//               >
//                 <Tab label="Home" value="userhome" component={Link} to={`/userhome`} />
//                 <Tab label="Account" value="account" component={Link} to={`/account`} />
//               </StyledTabs>
//               <Button
//                 variant="contained"
//                 sx={{ background: "#1E3CA8" }}
//                 onClick={handleLogout}
//                 component={Link}
//                 to={`/`}
//               >
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <Button
//               variant="contained"
//               sx={{ background: "#1E3CA8", marginLeft: "auto" }}
//               component={Link}
//               to={`/login`}
//             >
//               Sign In
//             </Button>
//           )}
//         </Toolbar>
//       </AppBar>
//     </React.Fragment>
//   );
// };

// export default Header;

//Responsive
import React, { useState } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, Button, useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loggedoutUser } from "../features/userSlice";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import MovieIcon from "@mui/icons-material/Movie";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.1rem", 
    padding: "0.1rem", 
    borderRadius: "0.1rem", 
    borderBottom: "2px solid #1E3CA8", 
    width: "300px"
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem", 
    padding: "0.3rem 0.6rem", 
  },
}));

const Header = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const [tabValue, setTabValue] = useState(false);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user.id);

  const handleLogout = () => {
    dispatch(loggedoutUser());
    window.localStorage.setItem("isLoggedIn", false);
    console.log("logout dispatched");
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#0A0A0A", zIndex: 0 }}>
        <Toolbar variant="dense">
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
            to={`${userId ? `/userhome` : `/`}`}
          >
            WATCHIFY
          </Typography>

          {userId ? (
            <>
              <StyledTabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={tabValue}
                onChange={(e, tabValue) => setTabValue(tabValue)}
                TabIndicatorProps={{ style: { background: "#1E3CA8" } }}
              >
                <Tab label="Home" value="userhome" component={Link} to={`/userhome`} />
                <Tab label="Account" value="account" component={Link} to={`/account`} />
              </StyledTabs>
              <StyledButton
                variant="contained"
                sx={{ background: "#1E3CA8" }}
                onClick={handleLogout}
                component={Link}
                to={`/`}
              >
                Logout
              </StyledButton>
            </>
          ) : (
            <StyledButton
              variant="contained"
              sx={{ background: "#1E3CA8", marginLeft: "auto" }}
              component={Link}
              to={`/login`}
            >
              Sign In
            </StyledButton>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;