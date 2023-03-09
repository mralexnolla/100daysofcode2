import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import {useDispatch, useSelector} from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import {fetchAsyncMovies} from '../../features/movies/movieSlice'
import "../MovieListing/MovieListing.scss"

// now we are not accessing the data from the API into the store yet, lets do data 

const Home = () => {
    //console.log(APIkey)
    const movies = useSelector(getAllMovies);
    console.log(movies)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies())
    },[dispatch])

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing movies = {movies}/>

        </div>
    );
};

export default Home;

// in the home i will make an API call to the OMDB