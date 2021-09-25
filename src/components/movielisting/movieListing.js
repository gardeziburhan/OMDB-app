import { Container, Grid } from '@mui/material';
import { Box, grid } from '@mui/system';
import React from 'react';
import './movielisting.css';
import MovieCard from './MovieCard';

const MovieListing = (props) => {
  console.log("props in movieListing ", props)
  return (

    <Container>
      <Grid container spacing={3}>
        {props.movie.map((movies, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <MovieCard movie={movies} />
          </Grid>
        ))}
      </Grid>
    </Container>



    // <div className="moviesandseasons">
    //   {props.movie.map((movie, index) => (
        
    //     <div key={index} className="movie">
    //         <img src={movie.Poster} alt="" ></img>
    //         <p>{movie.Title}</p>
    //         <p>Type:{movie.Type} - Year: {movie.Year}</p>

    //     </div>
    // ))}
    // </div>
   
    )}

       
  

export default MovieListing;