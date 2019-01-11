import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {Movie} from "./movie";
import {addToFavourites, fetchGenres} from "../actions/popularActions";
import { getMovieId } from "../actions/popularActions";
import MovieBottom from "./movieBottom"

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.dbLink = "https://image.tmdb.org/t/p/w400";
    }

    componentDidMount(){
        this.props.fetchGenres();
    }

    getMovieId(movieId) {
        this.props.getMovieId(movieId);
    }

    render() {
        if (this.props.genres) {
            return (
                <div className={"movies__block"}>
                    {
                        this.props.searchResults.map((movie, index) => {
                            return (
                                <div>
                                    <Link to={`/${movie.id}`} component={Movie} key={movie.id} onClick={() => {this.getMovieId(movie.id)}}>
                                        <div className={"movie-card"} key={index}>
                                            <div>{movie.title}</div>
                                            <img src={`${this.dbLink}${movie.poster_path}`}></img>
                                        </div>
                                    </Link>
                                    <MovieBottom
                                        genres={this.props.genres.genres}
                                        movieGenres={movie.genre_ids}
                                        favourite={{
                                            id: movie.id,
                                            title: movie.title,
                                            img: `${this.dbLink}${movie.poster_path}`
                                        }}
                                        movietTitle={movie.title}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

    }
}

function mapStateToProps(state){
    return {
        genres: state.genres.id,
        favourites: state.favourites.favourites,
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addToFavourites: addToFavourites,
        fetchGenres: fetchGenres,
        getMovieId: getMovieId
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchResults);