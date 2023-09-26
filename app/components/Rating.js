import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function MovieRating({ value, onChange }) {
  return (
    <Rating
      name="movie-rating"
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      precision={1}
      max={10}
    />
  );
}
