import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import NYT_API_KEY from '../secrets'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{

  constructor(props){
    super(props)
    this.state = {
      reviews: []
    }


    fetch(URL)
    .then(res => res.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }

  render(){
    return(
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
  }


}
