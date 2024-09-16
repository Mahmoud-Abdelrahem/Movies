import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
    name: "loader",
    initialState: {
        loader: true,
    },
    reducers: {
        takeloader(state, action) {
            state.loader = action.payload;
        },
        resetLoader(state, action) {
            state.loader = !state.loader;
        },
    },
});

export const { takeloader, resetLoader } = LoaderSlice.actions;

export default LoaderSlice.reducer;