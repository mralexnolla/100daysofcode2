import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { addMovieOrShowDetail, getMovieOrShowDetail } from '../../features/movies/movieSlice';
import "../MovieDetail/MovieDetail.scss"


const MovieDetail = () => {
    const {imdbID} = useParams();
    console.log(imdbID)
    const dispatch = useDispatch();
    const data = useSelector(getMovieOrShowDetail)
    return (
        <div>
            Movie Detail
        </div>
    );
};

export default MovieDetail;