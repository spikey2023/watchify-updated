//automatically added the thunk middleware
//automatically combines reducers
//automatically set up the Redux DevTools Extension connection
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
