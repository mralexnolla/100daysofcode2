import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from '../../common/api/movieApi';
import { APIkey } from '../../common/api/MovieApiKey';
import {useDispatch} from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

// now we are not accessing the data from the API into the store yet, lets do data 

const Home = () => {
    //console.log(APIkey)
    const dispatch = useDispatch();
    useEffect(() => {
        const movieText = "Harry";
        const fetchMovie = async () => {
            const response = await movieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("Err :", err)
            });
            
            //console.log("The response ", response)
            dispatch(addMovies(response.data))
        }

        // now lets call the fecthMovie. The will fetch all movies that start by Harry from the OMDB
        fetchMovie()
    },[])

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />

        </div>
    );
};

export default Home;

// in the home i will make an API call to the OMDB