import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import NYT_API_KEY from '../secrets'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=';

// Code SearchableMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component{

  constructor(props){
    super(props)

    this.state = {
      searchTerm: "",
      reviews: []
    }

    this.changeSearch = this.changeSearch.bind(this)
    this.search = this.search.bind(this)
  }

  changeSearch(e){
    this.setState({
      searchTerm: e.target.value
    })
  }

  search(ev) {
    ev.preventDefault();
    fetch(URL + this.state.searchTerm + `&api-key=${NYT_API_KEY}`)
    .then(res => res.json())
    .then(reviews => {
      this.setState({reviews: reviews.results})
    })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.search}>
          <input type="text" onChange={this.changeSearch} value={this.state.searchTerm} />
          <input type="submit" value="Search"/>
        </form>

        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }


}
