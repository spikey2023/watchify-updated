import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  genres: [],
  error: "",
  token: "",
};

export const getAllGenres = createAsyncThunk(
  "genres/getAllGenres",
  async () => {
    try {
      const response = await axios.get("/api/getGenres");
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const allGenresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(getAllGenres.rejected, (state, action) => {
      return action.error.message;
    });
  },
});

export default allGenresSlice.reducer;
