//automatically added the thunk middleware
//automatically combines reducers
//automatically set up the Redux DevTools Extension connection
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import registerReducer from "./features/register";
import logger from "redux-logger";

//below was mine
const store = configureStore({
  reducer: {
    auth: userReducer,
    register: registerReducer,
  },
  middleware: [logger],
});

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     register: registerReducer,
//   },
//   middleware: [logger, thunk],
// });

export default store;
