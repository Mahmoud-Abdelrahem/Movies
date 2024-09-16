import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../../api/axios/axiosConfig";

export const FavoriteMoviesAction = createAsyncThunk("getFavoriteMovies", async () => {
    const options = {
        method: "GET",
        url: "movie/popular?language=en-US&page=1",
        headers: {
          accept: "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTEzN2JmNGUxNjk0Y2IwNDVmNjZmNDYwNGNjNWYwYiIsIm5iZiI6MTcyNTMxNzcwMi42NTIwNDQsInN1YiI6IjY2ZDY0MDQ3ZWIyODBkNWYxYTI3Njk3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WhxhsZE8XJrYa0mPgxKQsZGePguYdjLWcIICR7yiMGo",
        }
    };
    try {
        const FavoriteMovies = await instance.request(options);
        return FavoriteMovies.data.results;
    } catch (error) {
        return error;
    }
});

const FavoriteMoviesSlice = createSlice({
    name: "FavoriteMovies",
    initialState: {
        FavoriteMovies: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const movieId = action.payload;
            const movie = state.FavoriteMovies.find(movie => movie.id === movieId);
            if (movie) {
                movie.Favorite = !movie.Favorite;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(FavoriteMoviesAction.fulfilled, (state, action) => {
            if(state.FavoriteMovies.length == 0) {
                state.FavoriteMovies = action.payload.map(movie => ({
                    ...movie,
                    Favorite: movie.Favorite || false 
                }));
            }
        });
        builder.addCase(FavoriteMoviesAction.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(FavoriteMoviesAction.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    },
});

export const { toggleFavorite } = FavoriteMoviesSlice.actions;
export default FavoriteMoviesSlice.reducer;
