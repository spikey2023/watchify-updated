// import axios from "axios";

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   userGenrePrefs: [],
//   error: "",
//   token: "",
// };

// export const getUserGenrePrefs = createAsyncThunk(
//   "genrePef/getUserGenrePrefs",
//   async ({ id, token }) => {
//     try {
//       const response = await axios.get(`/api/genres/user/${id}`, {
//         headers: {
//           authorization: token,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return error.message;
//     }
//   }
// );

// const userGenrePrefSlice = createSlice({
//   name: "genrePef",
//   initialState,
//   reducers: {
//     //Logout action
//     loggedoutUser: (state) => {
//       state.userGenrePrefs = [];
//       state.error = "";
//       state.token = "";
//     },
//   },
//   //extraReducers handle axios calls - unlike "reducers:{}"
//   extraReducers: (builder) => {
//     builder.addCase(getUserGenrePrefs.fulfilled, (state, action) => {
//       state.user = action.payload;
//     });
//     builder.addCase(getUserGenrePrefs.rejected, (state, action) => {
//       state.error = action.error.message;
//     });
//     // builder.addCase(updateUserGenrePref.fulfilled, (state, action) => {
//     //   state.user = action.payload;
//     // });
//     // builder.addCase(updateUserGenrePref.rejected, (state, action) => {
//     //   state.error = action.error.message;
//     // });
//   },
// });
// export const { loggedinUser, loggedoutUser } = userSlice.actions;
// export default userGenrePrefSlice.reducer;

// export const selectUser = (state) => state.genrePef.userGenrePrefs //if using selectUser()
