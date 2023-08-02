import React from 'react'

const MovieCard = ({ movie }) => {
    const { title, description, posterURL, rating } = movie;

    return (
      <div style={{background: 'linear-gradient(to left, #ef4444, #9ca3af)'}} className="movie-card">
        <img src={posterURL} alt={title} style={{width: '20rem',height: '20rem'}} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    );
}

export default MovieCard
