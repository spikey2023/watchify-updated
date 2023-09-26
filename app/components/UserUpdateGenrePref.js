import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { getUserGenrePrefs } from "../features/userSlice";
import { getAllGenres } from "../features/genresSlice";
import GenreCheckboxes from "./GenreCheckboxes";

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
      })
    );
  }, []);

  useEffect(() => {
    populateCheckboxes(); //not getting called
  }, [auth.userGenrePrefs]);

  const [checkedState, setCheckedState] = React.useState([]);

  const userGenres = auth.userGenrePrefs;

  const populateCheckboxes = () => {
    //filter through entire genreprefs list creating an array of tndb_ids,
    //then map through all genres creating an object in an array, then at each genre push tmdb_id: true if
    //usergenresArr.includes(that id) else push tmdb_id:false into data array object

    //OR create a picked genres array and
    if (userGenres?.length > 0 && checkedState.length === 0) {
      genres.map((genre) => {
        // console.log("userGenres.genreTmdbId", userGenres.genreTmdbId);
        // console.log("genre.tmdb_id", genre.tmdb_id);
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
  const handleSubmit = async (e) => {
    const data = []

    data.push(parseInt(e.target.value));
    console.log("DATA is", data);
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
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <GenreCheckboxes />
          <FormHelperText
            // error={genreError}
            sx={{ marginLeft: "2rem", marginTop: "-0.5rem" }}
          >
            Please select at least 2 genres you enjoy!
          </FormHelperText>
        </FormControl>
        <Button variant="contained" color="success" type="submit">
          update
        </Button>
      </Box>
    </div>
  );
}
