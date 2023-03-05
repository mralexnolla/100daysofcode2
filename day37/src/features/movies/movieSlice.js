// now create our slice and actions 

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: []
}

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            //accessing the movies 
            state.movies = payload
        }
    }
})

export const {addMovies} = movieSlice.actions;
export default movieSlice.reducer