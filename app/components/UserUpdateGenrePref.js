import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
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
        //genrePrefs: auth.userGenrePrefs,
        token: auth.token,
      })
    );
  }, []);

  useEffect(() => {
    populateCheckboxes(); //not getting called
  }, [auth.userGenrePrefs]);

  const [checkedState, setCheckedState] = React.useState([]);

  let data = checkedState;

  const userGenres = auth.userGenrePrefs;

  const populateCheckboxes = () => {
    //filter through entire genres list creating an object in an array, then at each genre push tmdb_id: true if
    //usergenres.includes(that id) matches else tmdb_id:false into data array object
    if (userGenres?.length > 0 && checkedState.length === 0) {
      genres.map((genre) => {
        console.log("userGenres.genreTmdbId", userGenres.genreTmdbId);
        console.log("genre.tmdb_id", genre.tmdb_id);
        if (genre.tmdb_id === userGenres.genreTmdbId) {
          data.push(true);
        } else {
          data.push(false);
        }
      });
      //console.log("DATA in state is", data);
      //return setCheckedState(data);
      console.log("checkedState", checkedState);
    }
  };

  //this will need to change
  const handleChange = (e) => {
    console.log("DATA is", data);
    data.push(parseInt(e.target.value));
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
    <div className="usergenrepref-container-margin">
      <p className="p-heading">UPDATE YOUR SAVED PREFERENCES:</p>
      <form onSubmit={savePreferences}>
        <Box sx={{ display: "flex" }}>
          <FormGroup
            sx={{
              // marginLeft: 1,
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
    </div>
  );
}
