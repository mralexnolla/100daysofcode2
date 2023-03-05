// now create our slice and actions 

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {}
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
            
        }
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;  // state.storename(movies).stateObject(movies)
export default movieSlice.reducer 