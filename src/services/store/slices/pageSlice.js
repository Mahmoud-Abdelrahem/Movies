import { createSlice } from "@reduxjs/toolkit";



const pageSlice = createSlice({
    name: "id",
    initialState: {
        id: 1
    },
    reducers: {
        nextMovie(state) {
            if (state.id < 20) {
                state.id += 1;
            }
        },
        prevMovie(state) {
            if (state.id > 1) {
                state.id -= 1;
            }
        },
        setMovie(state, action) {
            const newid = action.payload;
            if (newid >= 1 && newid <= 20) {
                state.id = newid;
            }
        }
    }
});

export const { nextMovie, setMovie, prevMovie } = pageSlice.actions;

export default pageSlice.reducer;
