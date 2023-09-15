import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    pwError: false,
    emailError: "none",
    currEmailInput: "",
}

export const registrationSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        pwError: (state) => {state.pwError = true},
        pwNoError: (state) => {state.pwError = false},
        emailInvalid: (state) => {state.emailError = "invalid"},
        emailTaken: (state) => {state.emailError = "taken"},
        updateCurrEmailInput: (state, input) => {
            state.currEmailInput = input.payload;
            state.emailError = "none";
        },
    },

});

export const registerUser = async (data) => {
    try {
        const user = await axios.post("/api/user", data);
    } catch (error) {
        console.log(error);
    }
}

export const { 
    pwError, 
    pwNoError, 
    emailInvalid, 
    emailNoError, 
    emailTaken, 
    updateCurrEmailInput } = registrationSlice.actions;

export default registrationSlice.reducer;