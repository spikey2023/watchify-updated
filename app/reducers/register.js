import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pwsNotMatch: false,
}

export const registrationSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        checkPws: (state, input) => {
            if(input.payload.password !== input.payload.confirmPw) state.pwsNotMatch = true;
        }
    },
});

export const { checkPws } = registrationSlice.actions;

export default registrationSlice.reducer;