import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addMovieOrShowDetail, getMovieOrShowDetail } from '../../features/movies/movieSlice';
import "../MovieDetail/MovieDetail.scss"
import movieApi from '../../common/api/movieApi';
import { APIkey } from '../../common/api/MovieApiKey';
import {AiOutlineStar} from 'react-icons/ai'
import {HiThumbUp} from 'react-icons/hi'
import {BsFilm} from 'react-icons/bs'
import {FcCalendar} from 'react-icons/fc'



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
                        IMDB Rating <AiOutlineStar /> : {data.imdbRating}
                    </span>
                    <span>
                        IMDB Votes <HiThumbUp /> : {data.imdbRating}
                    </span>
                    <span>
                        Runtime <BsFilm/> : {data.imdbRating}
                    </span>
                    <span>
                        Year <FcCalendar /> : {data.imdbRating}
                    </span>
                    
                </div>

                <div className="movie-plot">
                    {data.Plot}
                </div>
                <div className="movie-info">
                    <div className="">
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div className="">
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div className="">
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div className="">
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div className="">
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
                
            </div>
            <div className="section-right">
                <img src={data.Poster} alt={data.Title} />
            </div>
        </div>
    );
};

export default MovieDetail;