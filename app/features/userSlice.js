import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  userGenrePrefs: [],
  isLoggedIn: window.localStorage.getItem("isLoggedIn"),
  error: "",
  token: "",
};

export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  try {
    const response = await axios.post(`/api/auth/login`, user);
    window.localStorage.setItem("isLoggedIn", true);
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
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (userInfo) => {
    try {
      const { data: updated } = await axios.put(
        `/api/user/${userInfo.id}`,
        userInfo,
        {
          headers: {
            authorization: userInfo.token,
          },
        }
      );
      return updated;
    } catch (error) {
      return error.message;
    }
  }
);

export const getUserGenrePrefs = createAsyncThunk(
  "auth/getUserGenrePrefs",
  async ({ id, token }) => {
    try {
      const response = await axios.get(`/api/genres/user/${id}`, {
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

//need to send back userId and genres, token is in userInfo
export const updateUserGenrePrefs = createAsyncThunk(
  "auth/updateUserGenrePrefs",
  async (userInfo, genreArr) => {
    try {
      const response = await axios.put(
        `/api/genres/user/${id}`,
        userInfo,
        genreArr,
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
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
  reducers: {
    //Logout action
    loggedoutUser: (state) => {
      state.user = {};
      state.userGenrePrefs = [];
      state.isLoggedIn = localStorage.clear();
      state.error = "";
      state.token = "";
    },
  },
  //extraReducers handle axios calls - unlike "reducers:{}"
  extraReducers: (builder) => {
    builder.addCase(getUserGenrePrefs.fulfilled, (state, action) => {
      state.userGenrePrefs = action.payload;
    });
    builder.addCase(getUserGenrePrefs.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updateUserGenrePrefs.fulfilled, (state, action) => {
      state.userGenrePrefs = action.error.message;
    });
    builder.addCase(updateUserGenrePrefs.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      //state.userGenrePrefs = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(updateUserInfo.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      //state.user = action.payload;
      return action.payload;
    });
    
  },
});

export const { loggedoutUser } = userSlice.actions;
//need to export actions for non-axios action calls

export default userSlice.reducer;

//export const selectUser = (state) => state.auth.user //if using selectUser()
