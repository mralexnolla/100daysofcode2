// now create our slice and actions 

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {},
    shows: {},
    
    
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload
            
        },
        addShows: (state, {payload}) => {
            state.shows = payload
        },
        
        
    },
    
    
})

export const {addMovies, addShows, addMovieOrShowDetail} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;  // state.storename(movies).stateObject(movies)
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer 