import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { getUserGenrePrefs } from "../features/userSlice";
import { updateUserGenrePrefs } from "../features/userSlice";
import CopyGenreCheckboxes from "./CopyGenreCheckboxes";

const genres = [
  { name: "Action", genreTmdbId: 28, checked: false },
  { name: "Adventure", genreTmdbId: 12, checked: false },
  { name: "Animation", genreTmdbId: 16, checked: false },
  { name: "Comedy", genreTmdbId: 35, checked: false },
  { name: "Crime", genreTmdbId: 80, checked: false },
  { name: "Documentary", genreTmdbId: 99, checked: false },
  { name: "Drama", genreTmdbId: 18, checked: false },
  { name: "Family", genreTmdbId: 10751, checked: false },
  { name: "Fantasy", genreTmdbId: 14, checked: false },
  { name: "History", genreTmdbId: 36, checked: false },
  { name: "Horror", genreTmdbId: 27, checked: false },
  { name: "Music", genreTmdbId: 10402, checked: false },
  { name: "Mystery", genreTmdbId: 9648, checked: false },
  { name: "Romance", genreTmdbId: 10749, checked: false },
  { name: "Science Fiction", genreTmdbId: 878, checked: false },
  { name: "TV Movie", genreTmdbId: 10770, checked: false },
  { name: "Thriller", genreTmdbId: 53, checked: false },
  { name: "War", genreTmdbId: 10752, checked: false },
  { name: "Western", genreTmdbId: 37, checked: false },
];

export default function UserUpdateGenrePref() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUserGenrePrefs({
        id: auth.user.id,
        token: auth.token,
      })
    );
  }, []);

  useEffect(() => {
    populateCheckboxes();
  }, [auth.userGenrePrefs]);

  const [checked, setCheckedState] = useState(genres);

  const userGenres = auth.userGenrePrefs;

  const populateCheckboxes = () => {
    if (userGenres?.length > 0) {
      userGenres.forEach((userPref) => {
        const nextCheck = [...checked];
        const found = nextCheck.find((g) => {
          return g.genreTmdbId === userPref.genreTmdbId;
        });
        found.checked = true;
        setCheckedState(nextCheck);
      });
    }
  };

  const handleChange = (e) => {
    setCheckedState((prevState) => [
      ...prevState,
      { ...checked, genreTmdbId: e.target.value, checked: e.target.checked },
    ]);
    //console.log("checked", checked, "e.target.value", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //filter through data and push genreTmdbId's into an array,
    //then call updateUserGenrePrefs(auth, this array)
    // }
    // if (above array.length < 2) {
    //   window.alert("please check at least 2 genres");
    // }
    //console.log("data in submit", data);
  };
  return (
    <div className="usergenrepref-container-margin">
      <p className="p-heading">UPDATE YOUR GENRE PREFERENCES:</p>
      <div></div>
      <p className="genre-p">
        Please make sure at least 2 genres are selected!
      </p>
      <Box
        className="genre-form"
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex" }}
      >
        <FormControl sx={{ marginBottom: "1rem", display: "flex" }}>
          <CopyGenreCheckboxes
            selectedGenres={checked}
            handleChange={handleChange}
          />
        </FormControl>
        <Button
          className="btn"
          variant="contained"
          color="success"
          type="submit"
        >
          update
        </Button>
      </Box>
    </div>
  );
}
