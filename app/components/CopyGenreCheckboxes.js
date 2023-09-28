import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function CopyGenreCheckboxes(props) {
  console.log("PROPS", props)
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
          {props.selectedGenres.map((genre) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={genre.checked}
                    onChange={props.handleChange}
                  />
                }
                key={`${genre.genreTmdbId}-checkbox`}
                sx={{ width: "120pt" }}
                label={genre.name}
                value={genre.genreTmdbId}
              />
            );
          })}
        </FormGroup>
      </Box>
    </div>
  );
}
