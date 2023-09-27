import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { getUserGenrePrefs } from "../features/userSlice";
import CopyGenreCheckboxes from "./CopyGenreCheckboxes";

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

  const [checked, setCheckedState] = React.useState({});
  const [data, setData] = React.useState([]);

  const userGenres = auth.userGenrePrefs;

  const populateCheckboxes = () => {
    if (userGenres?.length > 0 && !checked.length) {
      userGenres?.filter((genre) => {
        setData((prevProps) => {
          return [...prevProps, genre.genreTmdbId];
        });
      });
    }
  };

  // {id: true}
  const handleChange = (e) => {
    setCheckedState(() => ({
      ...data,
      [e.target.value]: e.target.checked,
    }));
    console.log("$$$$$$", checked, e.target.value, e.target.checked, data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i <= 18; i++) {
      if (e.target[i].checked) {
        data.push(parseInt(e.target[i].value));
      }
      if (data.length < 2) {
        window.alert("please check at least 2 genres");
      }
    }
    console.log("data in submit", data);
  };
  return (
    <div className="usergenrepref-container-margin">
      <p className="p-heading">UPDATE YOUR GENRE PREFERENCES:</p>
      <p>Please select at least 2 genres you enjoy!</p>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex" }}>
        <FormControl sx={{ marginBottom: "1rem" }}>
          <CopyGenreCheckboxes
            selectedGenres={data}
            handleChange={handleChange}
          ></CopyGenreCheckboxes>
          {/* <FormHelperText
            // error={genreError}
            sx={{ marginLeft: "2rem", marginTop: "-0.5rem" }}
          >
            Please select at least 2 genres you enjoy!
          </FormHelperText> */}
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
