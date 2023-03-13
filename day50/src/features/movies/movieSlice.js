// now create our slice and actions 

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {},
    shows: {},
    movieOrShowDetail: {}
    
    
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
        addMovieOrShowDetail: (state, {payload}) => {
            state.movieOrShowDetail = payload
        },
        removeSelectedMovieOrShow: (state) => {
            state.addMovieOrShowDetail = {}
        }
        
        
    },
    
    
})

export const {addMovies, addShows, addMovieOrShowDetail, removeSelectedMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;  // state.storename(movies).stateObject(movies)
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.movieOrShowDetail;
export default movieSlice.reducer 