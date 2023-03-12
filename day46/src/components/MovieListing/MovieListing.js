import React from 'react';
import {useSelector} from 'react-redux';
import { getAllMovies, getAllShows} from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';


const MovieListing = () => {
    const movies  = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    
    // render the movies
    let renderMovies = "";
    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
           <MovieCard key={index} data={movie}/>
        ))
    ) : (<div><h3>{movies.Error}</h3></div>) ;

    // render the shows 
    let renderShows = "";
    renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index) => (
           <MovieCard key={index} data={show}/>
        ))
    ) : (<div><h3>{shows.Error}</h3></div>) ;

   
    
    return (
        <div className="movie-wraper">
            <div className="movie-list">
              <h2>Movies</h2>
              <div className="movie-container">{renderMovies}</div>
            </div>
            <div className="show-list">
              <h2>Shows</h2>
              <div className="movie-container">{renderShows}</div>
            </div>
        </div>
    );
};

export default MovieListing;