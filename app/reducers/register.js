import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    pwError: false,
    emailError: false,
}

export const registrationSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        pwError: (state) => {state.pwError = true},
        pwNoError: (state) => {state.pwError = false},
        emailError: (state) => {state.emailError = true},
        emailNoError: (state) => {state.emailError = false},
    },

});

export const registerUser = async (data) => {
    try {
        const user = await axios.post("/api/user", data);
    } catch (error) {
        console.log(error);
    }
}

export const { pwError, pwNoError, emailError, emailNoError } = registrationSlice.actions;

export default registrationSlice.reducer;