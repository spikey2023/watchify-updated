import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "@mui/material/Link";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { getUserGenrePrefs } from "../features/userSlice";
import { getAllGenres } from "../features/genresSlice";

export default function UserUpdateGenrePref() {
  const auth = useSelector((state) => state.auth);
  const genres = useSelector((state) => state.genres);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(
      getUserGenrePrefs({
        id: auth.user.id,
        token: auth.token,
        genrePrefs: auth.userGenrePrefs,
      })
    );
    populateCheckboxes();
  }, []);

  const userGenres = auth.user;

  const [checkedState, setCheckedState] = React.useState([]);
  let data = checkedState;

  //gets skipped over in initial render (userGenres is undefined)
  const populateCheckboxes = () => {
    console.log("userGenres.length is", userGenres.length);
    console.log("checkedState.length is", checkedState.length);
    if (userGenres.length > 0 && checkedState.length === 0) {
      userGenres.filter((genre) => {
        console.log("genre.genreTmdbId is", genre.genreTmdbId);
        data.push(genre.genreTmdbId);
      });
      console.log("DATA in state is", data);
      //return setCheckedState(data);
      //or setCheckedState(...checkedState, ...genreIds);
    }
  };

  //this works:
  // const [checkedState, setCheckedState] = React.useState([]);

  const handleChange = (e) => {
    //let data = checkedState;
    console.log("DATA is", data);
    data.push(parseInt(e.target.value));
    //setCheckedState(...checkedState, ...data); //not good
    setCheckedState(data);
    console.log("checkedState");
  };

  //this works
  // const handleChange = (e) => {
  //   let data = checkedState;
  //   data.push(parseInt(e.target.value));
  //   console.log(e.target.value);
  //   setCheckedState(data);
  // };

  //this works
  const savePreferences = (e) => {
    e.preventDefault();
    if (checkedState.length >= 2) {
      console.log(checkedState);
    } else {
      window.alert("please check at least 2 genres");
    }
  };

  return (
    <div className="useraccount">
      <h1 className="user-account-h1">My Account</h1>
      <div className="acc-genrepref-container">
        <aside className="useracc-left-nav">
          <Link className="account-link" href="/account" underline="hover">
            Account info
          </Link>
          <Link
            className="genrepref-link"
            href="/account/genrepref"
            underline="hover"
          >
            Genre preferences
          </Link>
          <Link
            className="watched-link"
            href="/account/watched"
            underline="hover"
          >
            My watched list
          </Link>
        </aside>
        <main className="useracc-right-main">
          <p className="p-heading">UPDATE YOUR SAVED PREFERENCES:</p>
          <form onSubmit={savePreferences}>
            <Box sx={{ display: "flex" }}>
              <FormGroup
                sx={{
                  marginLeft: 3,
                  marginRight: 3,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {genres.length > 0 ? (
                  genres.map((genre) => (
                    <div className="checkboxes-container" key={genre.tmdb_id}>
                      <FormControlLabel
                        label={genre.name}
                        control={
                          <Checkbox
                            onChange={(e) => handleChange(e)}
                            value={genre.tmdb_id}
                            name={genre.name}
                            inputProps={{ "aria-label": "controlled" }}
                            sx={{ width: "100pt" }}
                          />
                        }
                      />
                    </div>
                  ))
                ) : (
                  <p>Loading....</p>
                )}
              </FormGroup>
            </Box>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#1E3CA8" }}
              type="submit"
            >
              update
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
}
