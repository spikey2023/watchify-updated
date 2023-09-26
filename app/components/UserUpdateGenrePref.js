import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { getUserGenrePrefs } from "../features/userSlice";
//import GenreCheckboxes from "./GenreCheckboxes";

import CopyGenreCheckboxes from "./CopyGenreCheckboxes";

const genreLookup = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

const genres = Object.keys(genreLookup);

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

  const [checked, setCheckedState] = React.useState(false);
  const [data, setData] = React.useState([]);
  const userGenres = auth.userGenrePrefs;

  //filter through entire genreprefs list creating an array of tndb_ids,
  //then map through all genres creating an object in an array, then at each genre push tmdb_id: true if
  //usergenresArr.includes(that id) else push tmdb_id:false into data array object

  //OR create a picked genres array and
  console.log("userGenres:", userGenres);

  const populateCheckboxes = () => {
    console.log("checked.length", checked.length);

    if (userGenres?.length > 0 && !checked.length) {
      userGenres?.filter((genre) => {
        console.log("genre.genreTmdbId", genre.genreTmdbId);
        data.push(genre.genreTmdbId);
      });
      setData(data);
      console.log("DATA in state is", data);
      //return setCheckedState(data);
      // console.log("checkedState", checkedState);
    }

    console.log({data})
  };

  const handleChange = (e) => {
    console.log("e.target", e.target);
    setCheckedState(e.target.checked);
    data.push(parseInt(e.target.value));
    setData(data)
    console.log("DATA is", data);
    console.log("checkedState");
  };
  //this will need to change
  const handleSubmit = async (e) => {
    console.log("e.target.value", e.target.value);
    const data = [];
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
      console.log(checked);
    } else {
      window.alert("please check at least 2 genres");
    }
  };

  return (
    <div className="usergenrepref-container-margin">
      <p className="p-heading">UPDATE YOUR GENRE PREFERENCES:</p>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <CopyGenreCheckboxes
            selectedGenres={data}
            handleChange={handleChange}
          ></CopyGenreCheckboxes>
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

/*

          <Box sx={{ display: "flex" }}>
            <FormGroup
              sx={{
                marginLeft: 3,
                marginRight: 3,
                display: "flex",
                flexDirection: "row",
              }}
            >
              {genres.map((x) => (
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleChange} />
                  }
                  key={`${x}-checkbox`}
                  sx={{ width: "120pt" }}
                  label={x}
                  value={genreLookup[x]}
                />
              ))}
            </FormGroup>
          </Box>
*/
