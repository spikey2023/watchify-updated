import axios from "axios";

// can write the case reducers as functions inside of an object,
// instead of having to write a switch/case statement
// The reducers will be able to write shorter immutable update logic
// All the action creators will be generated automatically based on the reducer functions we've provided

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createSlice has 3 main options: name, initialState, reducers
const initialState = {
  user: {},
  isLoggedIn: false,
  error: "",
  token: "",
};

export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  try {
    const response = await axios.post(`/api/auth/login`, user);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const getUser = createAsyncThunk(
  "auth/getUser",
  async ({ id, token }) => {
    try {
      const response = await axios.get(`/api/user/${id}`, {
        headers: {
          authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userInfo) => {
    try {
      const { data: updated } = await axios.put(`/api/user/${id}`, userInfo);
      return updated;
    } catch (error) {
      return error.message;
    }
  }
);

//due to immer.js under the hood we don't need to copy state with spread operator
//will copy on it's own
const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  //extraReducers handle axios calls - unlike "reducers:{}"
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      //or: return action.payload  ??
      isLoggedIn: true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.error.message;
      isLoggedIn: false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
      isLoggedIn: true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      //state.user = action.payload;
      return action.payload;
      isLoggedIn: true;
    });
  },
});

//need to import actions for non-axios action calls
// export const { getUser } = userSlice.actions

export default userSlice.reducer;

//?  export const selectUser = (state) => state.user //may be state.user.user
