import React from 'react';
import './movielisting.css';

const MovieListing = (props) => {
  console.log(props)
  return (
    // if(props.movie.length>=2){
      
    // }
    <div className="moviesandseasons">
      {props.movie.map((movie, index) => (
        
        <div key={index} className="movie">
            <img src={movie.Poster} alt="" ></img>
            <p>{movie.Title}</p>
            <p>Type:{movie.Type} - Year: {movie.Year}</p>

        </div>
    ))}
    </div>
   
    )}

       
  

export default MovieListing;