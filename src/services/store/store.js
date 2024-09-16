import { configureStore } from "@reduxjs/toolkit";
import FavoriteMoviesSlice from "./slices/FavoriteMoviesSlice";
import loaderSlice from "./slices/loaderSlice";
import pageSlice from "./slices/pageSlice";

const store = configureStore({
    reducer: {
        loader: loaderSlice,
        newId: pageSlice,
        favoriteMovies: FavoriteMoviesSlice,
    },
});

export default store