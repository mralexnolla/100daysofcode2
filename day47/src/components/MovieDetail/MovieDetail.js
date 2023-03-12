import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addMovieOrShowDetail, getMovieOrShowDetail } from '../../features/movies/movieSlice';
import "../MovieDetail/MovieDetail.scss"
import movieApi from '../../common/api/movieApi';
import { APIkey } from '../../common/api/MovieApiKey';


const MovieDetail = () => {
    const {imdbID} = useParams();
    console.log(imdbID)
    const dispatch = useDispatch();
    const data = useSelector(getMovieOrShowDetail);
    //console.log(data)
    // API call call for movies and shows 
    useEffect(() => {
        const fetchMoviesOrShows = async (id) => {
            const response  = await movieApi.get(`?apikey=${APIkey}&i=${id}&plot=full`)
            .catch((err) => {
                console.log("Err :", err)
            });

            console.log(response.data)
            dispatch(addMovieOrShowDetail(response.data))
            
        }
        fetchMoviesOrShows(imdbID)
    })

    return (
        <div>
            Movie Detail
        </div>
    );
};

export default MovieDetail;