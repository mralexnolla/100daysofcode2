// now create our slice and actions 

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/api/movieApi';
import { APIkey } from '../../common/api/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "Harry";
    const response = await movieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    
    return response.data;

})



const initialState = {
    movies: {}
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
            
        },
    },
    
    builder: (builder) => {
        builder
            .addCase(fetchAsyncMovies.pending, (state) => {
                console.log("Pending ");
            })
            .addCase(fetchAsyncMovies.fulfilled, (state, {payload}) => {
                console.log("Fetched Successfully");
                state.movies = payload;
            })
            .addCase(fetchAsyncMovies.fulfilled, (state) => {
                console.log("Rejected!");
                
            });
    },
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;  // state.storename(movies).stateObject(movies)
export default movieSlice.reducer 