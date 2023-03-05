import React from 'react';
import {useSelector} from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';


const MovieListing = () => {
    const movies  = useSelector(getAllMovies)
    let renderMovies = "";
    renderMovies = movies ? (
        movies.Search.map((movie, index) => (
           <MovieCard key={index} data={movie}/>
        ))
    ) : (<div><h3>{movies.Error}</h3></div>) 
    
    return (
        <div className="movie-wraper">
            <div className="movie-lis">
              {renderMovies}
            </div>
        </div>
    );
};

export default MovieListing;