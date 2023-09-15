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
      precision={0.5}
      style={{
        background: "linear-gradient(transparent, rgb(112, 112, 112))",
      }}
    />
  );
}
