import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    pwsNotMatch: false,
}

export const registrationSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        checkPws: (state, input) => {
            if(input.payload.password !== input.payload.confirmPw) state.pwsNotMatch = true;
        },
    },
    // extraReducers: builder => {
    //     builder.addCase(registerUserExample.pending, state => {
    //         console.log(state);
    //     }).addCase(registerUserExample.fulfilled, state => {
    //         console.log(state);
    // })}

});

export const registerUser = createAsyncThunk("/api/user", async (data) => {
    try {
        console.log(data);
        const user = await axios.post("/api/user", data);
    } catch (error) {
        console.log(error);
    }
})

export const { checkPws } = registrationSlice.actions;

export default registrationSlice.reducer;