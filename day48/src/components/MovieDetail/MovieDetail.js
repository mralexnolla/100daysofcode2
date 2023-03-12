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
    console.log(data)
    // API call call for movies and shows 
    useEffect(() => {
        const fetchMoviesOrShows = async (id) => {
            const response  = await movieApi.get(`?apikey=${APIkey}&i=${id}&plot=full`)
            .catch((err) => {
                console.log("Err :", err)
            });

            
            dispatch(addMovieOrShowDetail(response.data))
            
        }
        fetchMoviesOrShows(imdbID)
    },[dispatch,imdbID ])

    // now that we can access the data lets use it 
    // i will continue from here to access the details 

    return (
        <div className="movie-section">
            <div className="section-left">
                <div className="movie-title">{data.Title}</div>
                <div className="movie-rating">
                    <span>
                        IMDB RATIN

                    </span>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;