import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import registerReducer from "./features/register";
import allGenresSlice from "./features/genresSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    //genres: allGenresSlice, //this is to get all genres (not user specific)
    auth: userReducer,
    register: registerReducer,
  },
  middleware: [logger, thunk],
});

export default store;
