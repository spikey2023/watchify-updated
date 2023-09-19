//automatically added the thunk middleware
//automatically combines reducers
//automatically set up the Redux DevTools Extension connection
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";

//below was mine
// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },

import counterReducer from '../features/counter/counterSlice'
import registerReducer from "./reducers/register";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
  },
  middleware: [logger, thunk],
});

export default store;
