import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { fetchMovie, fetchRecommendations, addToFavourites } from '../actions/popularActions';
import FavButton from './favButton'

class Movie extends React.Component{

    constructor(props){
        super(props);
        this.dbLink = "https://image.tmdb.org/t/p/w300";

        this.showBudget = this.showBudget.bind(this);
    }

    componentDidMount(){
        // extract the movie id from the url and pass it to fetchMovie() if user copy-pastes the link
        let urlMovieId = document.location.href;
        urlMovieId = urlMovieId.slice(urlMovieId.indexOf('movie'));
        urlMovieId = urlMovieId.slice(urlMovieId.indexOf("/"));
        urlMovieId = urlMovieId.slice(1);
        this.props.fetchMovie(this.props.movieId || urlMovieId).then(() => {
            this.props.fetchRecommendations(urlMovieId)
        });

        //const { handle } = this.props.match.params
    }

    addToFavourites(movie) {
        this.props.addToFavourites(movie);
    }

    showBudget(budget) {
        if (budget > 0) {
            return `${budget / 1000000} million`;
        } else {
            return "N/A"
        }
    }

    showMovieInfo() {
        return (
           <div>
               <h4 className={"movie-page__title"}>{this.props.movie.title}</h4>
               <h5>Overview</h5>
               <div>{this.props.movie.overview}</div>
               <div className={"movie-page__info-blocks"}>
                   <h5>Release date:</h5>
                   <span>{this.props.movie.release_date}</span>
               </div>
               <div className={"movie-page__info-blocks"}>
                   <h5>Budget:</h5>
                   <span>{this.showBudget(this.props.movie.budget)}</span>
               </div>
           </div>
        )
    }

    showRecommendations() {
        console.log('this.props.recommendations', this.props.recommendations);
        return (
            <div>
                <h4 className={"movie-page__recommendations-header"}>Recommendations</h4>
                <div className={"movie-page__recommendations"}>
                    {(this.props.recommendations || []).map((movie, index, arr) => {
                        return (
                            arr.length-1 !== index ? <div key={movie.id}>{movie.title},</div> : <div key={movie.id}>{movie.title}.</div>

                        )
                    })}
                </div>
            </div>
        )
    }

    render(){
        if (this.props.movie) {
            return (
                <section className={"container-fluid"}>
                    <div className={"movie-page"}>
                        <img src={`${this.dbLink}${this.props.movie.poster_path}`}></img>
                        <div className={"movie-page__info"}>
                            {this.showMovieInfo()}
                            {this.showRecommendations()}
                            <div className={"movie-page__favBtn"}>
                                <FavButton
                                    movieId={this.props.movie.id}
                                    movieTitle={this.props.movie.title}
                                    favourite={{
                                        id: this.props.movie.id,
                                        title: this.props.movie.title,
                                        img: `${this.dbLink}${this.props.movie.poster_path}`
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <div className={"loading"}></div>
            )
        }
    }
}

function mapStateToProps(state){
    return {
        movieId: state.movie.id,
        movie: state.movie.movie,
        recommendations: state.movie.recommendations,
        favourites: state.favourites.favourites
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchMovie: fetchMovie,fetchRecommendations: fetchRecommendations, addToFavourites: addToFavourites}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Movie); // this is now a container