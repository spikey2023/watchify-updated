import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  }, []);
  //console.log("AUTH", auth.user); //an array of genre prefs as genreTmdbId
  //loop through this array and check all that apply??
  const userGenres = auth.user;
  console.log("!!!!!!!", auth.user);
  const genreIds = [];
  // if (userGenres.length > 0) {
  //   userGenres.filter((genre) => genreIds.push(genre.genreTmdbId));
  //   console.log("!!!!!", genreIds);
  //}

  //this works:
  // const [checkedState, setCheckedState] = React.useState([]);

  const handleChange = (e) => {
    let data = checkedState;
    data.push(parseInt(e.target.value));
    console.log(e.target.value);
    setCheckedState(data);
  };

  //this works
  // const handleChange = (e) => {
  //   let data = checkedState;
  //   data.push(parseInt(e.target.value));
  //   console.log(e.target.value);
  //   setCheckedState(data);
  // };

  //this works
  // const savePreferences = (e) => {
  //   e.preventDefault();
  //   if (checkedState.length >= 2) {
  //     console.log(checkedState);
  //   } else {
  //     window.alert("please check at least 2 genres");
  //   }
  // };

  return (
    <div className="acc-genrepref-container">
      <h1 className="user-pref-h1">Update your saved preferences:</h1>
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
            <Box>
              <FormControl>
                <FormGroup>
                  {genres.length > 0 ? (
                    genres.map((genre) => (
                      <div className="checkboxes-container" key={genre.tmdb_id}>
                        <FormControlLabel
                          label={genre.name}
                          control={
                            <Checkbox
                              // checked={checkedState}
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
              </FormControl>
            </Box>
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

// {genres.length > 0 ? (
//   genres.map((genre) => (
//     <div className="checkboxes-container" key={genre.tmdb_id}>
//       <FormControlLabel
//         control={
//           <Checkbox
//             //checked={checkedState.genre.tmdb_id}
//             checked={checkedState.includes(genre.tmdb_id)}
//             onChange={() => handleChange(genre.tmdb_id)}
//             inputProps={{ "aria-label": "controlled" }}
//           />
//         }
//         sx={{ width: "100pt" }}
//         name={genre.name}
//         label={genre.name}
//         value={genre.tmdb_id}
//       />
//     </div>
//   ))
// ) : (
//   <div>no genres right now</div>
// )}

// return (
//   <div className="acc-genrepref-container">
//     <h1>Update your saved preferences:</h1>
//     <div>
//       <Box sx={{ display: "flex" }}>
//         <FormGroup
//           sx={{
//             marginLeft: 3,
//             marginRight: 3,
//             display: "flex",
//             flexDirection: "row",
//           }}
//         >
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Action"
//             value={28}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Adventure"
//             value={12}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Animation"
//             value={16}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Comedy"
//             value={35}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Crime"
//             value={80}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Documentary"
//             value={99}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Drama"
//             value={18}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Family"
//             value={10751}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Fantasy"
//             value={14}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="History"
//             value={36}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Horror"
//             value={27}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Music"
//             value={10402}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Mystery"
//             value={9648}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Romance"
//             value={10749}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Science Fiction"
//             value={878}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="TV Movie"
//             value={10770}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Thriller"
//             value={53}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="War"
//             value={10752}
//           />
//           <FormControlLabel
//             control={
//               <Checkbox
//                 checked={isChecked}
//                 onChange={handleChange}
//                 inputProps={{ "aria-label": "controlled" }}
//               />
//             }
//             sx={{ width: "100pt" }}
//             label="Western"
//             value={37}
//           />
//         </FormGroup>
//       </Box>
//     </div>
//   </div>
// );
