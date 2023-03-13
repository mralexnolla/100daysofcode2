import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addMovieOrShowDetail, getMovieOrShowDetail, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import "../MovieDetail/MovieDetail.scss"
import movieApi from '../../common/api/movieApi';
import { APIkey } from '../../common/api/MovieApiKey';
import {AiOutlineStar} from 'react-icons/ai'
import {BsHandThumbsUpFill} from 'react-icons/bs'
import {FcFilmReel} from 'react-icons/fc'
import {FcCalendar} from 'react-icons/fc'




const MovieDetail = () => {
    const {imdbID} = useParams();
    //console.log(imdbID)
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

            

            dispatch(addMovieOrShowDetail(response.data));
            
            return () => {
                dispatch(removeSelectedMovieOrShow())
                console.log("am here")
            }
            
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
                        IMDB Rating <AiOutlineStar id="ratingstart"/> : {data.imdbRating}
                    </span> 
                    <span>
                        Votes <BsHandThumbsUpFill id="thumbsup"/> : {data.imdbRating}
                    </span> 
                    <span>
                        Runtime <FcFilmReel/> : {data.imdbRating}
                    </span> 
                    <span>
                        Year <FcCalendar /> : {data.imdbRating}
                    </span> 
                </div>
                <div className="movie-plot">
                    {data.Plot}
                </div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
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