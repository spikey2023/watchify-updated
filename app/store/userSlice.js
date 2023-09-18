//import axios from "axios";

// const GET_USER = "GET_USER";

// const _getUser = (user) => {
//   return {
//     type: GET_USER,
//     user,
//   };
// };

// export const getUser = (id) => {
//   return async (dispatch) => {
//     const { data } = await axios.get(`/api/user/${id}`);
//     dispatch(_getUser(data));
//   };
// };

// export default (state = {}, action) => {
//   switch (action.type) {
//     case GET_USER:
//       return action.user;
//     default:
//       return state;
//   }
// };

// can write the case reducers as functions inside of an object,
// instead of having to write a switch/case statement
// The reducers will be able to write shorter immutable update logic
// All the action creators will be generated automatically based on the reducer functions we've provided

import { createSlice } from '@reduxjs/toolkit'

//createSlice has 3 main options: name, initialState, reducers
const initialState = {}

const userSlice = createSlice({
  name: user,
  initialState,
  reducers: {
getUser(state, action) {
  return action.user;
}
  }
})

export const { getUser } = userSlice.actions
export default userSlice.reducer
