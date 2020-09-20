import React, { Fragment } from 'react'

import { Container, Card, Title } from "./styles";

const Movie = ( {title, movies} ) =>(
    <Fragment>
        <div className="section-movies">
            <Title>{title}</Title>
            <Container>
                
            {movies.map((movie, index) => {
                return (
                    <Card key={index}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.original_title} 
                            title={movie.original_title}>
                        </img>

                        <div style={{display: 'none'}} className="description">
                            <h4>{movie.title}</h4>
                            <div className="overview">
                                <p>{movie.overview}</p>
                            </div>
                            <p className="date">{movie.release_date}</p>
                        </div>
                    </Card>
                )
            })}

            </Container>
        </div>
    </Fragment>
);

export default Movie;