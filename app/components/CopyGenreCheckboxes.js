import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

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

export default function CopyGenreCheckboxes(props) {
  const selectedIds = [];
  for (let key in props.selectedGenres) {
    selectedIds.push(parseInt(key));
    //console.log("key is", parseInt(key));
  }
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <FormGroup
          sx={{
            marginLeft: 3,
            marginRight: 3,
            display: "flex",
            flexDirection: "row",
          }}
        >
          {genres.map((x) => {
            return selectedIds.includes(genreLookup[x]) ? (
              <FormControlLabel
                control={
                  <Checkbox checked={true} onChange={props.handleChange} />
                }
                key={`${x}-checkbox`}
                sx={{ width: "120pt" }}
                label={x}
                value={genreLookup[x]}
              />
            ) : (
              // return (
              <FormControlLabel
                control={
                  <Checkbox checked={false} onChange={props.handleChange} />
                }
                key={`${x}-checkbox`}
                sx={{ width: "120pt" }}
                label={x}
                value={genreLookup[x]}
              />
              // );
            );
          })}
        </FormGroup>
      </Box>
    </div>
  );
}
