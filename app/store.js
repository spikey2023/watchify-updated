import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import registerReducer from "./reducers/register";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    register: registerReducer,
  },
});
