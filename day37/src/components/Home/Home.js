import React, {useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import movieApi from '../../common/api/movieApi';
import { APIkey } from '../../common/api/MovieApiKey';

const Home = () => {
    console.log(APIkey)
    useEffect(() => {
        const movieText = "Harry"
        const fetchMovie = async () => {
            const response = await movieApi.get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
            .catch((err) => {
                console.log("Err :", err)
            });
            console.log("The response ", response)
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