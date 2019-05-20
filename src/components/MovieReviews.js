import React from 'react'

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map(movie => <div className="review">
        <h1>{movie.display_title}</h1>
        {movie.multimedia && <img src={movie.multimedia.src} alt="Poster image"/>}
        <div>{movie.summary_short}</div>
      </div>)}
    </div>

  )
}

const Movie = ({movie}) => {
  return <div className="review">
    <h1>{movie.display_title}</h1>
    {movie.multimedia && <img src={movie.multimedia.src} alt="Poster image"/>}
    <div>{movie.summary_short}</div>
  </div>
}

export default MovieReviews
