import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: {}
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Actions
        setAuth: (state, action) => {},
        removeAuth: (state, action) => {},
    }
})

export const { setAuth, removeAuth } = authSlice.actions;

// Selectors - this is how we pull information fom the Global store slice
export const selectAuth = (state) => state.auth

export default authSlice.reducer