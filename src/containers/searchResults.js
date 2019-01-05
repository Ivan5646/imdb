import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {Movie} from "./movie";
import { DoubleNotification } from "../components/doubleNotification";
import {addToFavourites, fetchGenres} from "../actions/popularActions";
import { getMovieId } from "../actions/popularActions";


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

    addToFavourites(movie) {
        this.props.addToFavourites(movie);
    }

    renderGenres(array1, array2) {
        const genres = [];
        array1.map((listGenre) => {
            array2.find((popularGenre) => {
                if (popularGenre === listGenre.id) {
                    return genres.push(listGenre.name);
                }
            })
        });
        return genres;
    }

    render() {
        console.log("popluarMovie props", this.props);
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
                                    <div className="genres">
                                        {
                                            this.renderGenres(this.props.genres.genres, movie.genre_ids).map(genre => {
                                                return (
                                                    <div>{genre}</div>
                                                )
                                            })
                                        }
                                    </div>
                                    <button onClick={() => {this.addToFavourites({
                                        id: movie.id,
                                        title: movie.title,
                                        img: `${this.dbLink}${movie.poster_path}`
                                    })}}>
                                        Add to Favourites
                                    </button>
                                    <DoubleNotification double={
                                        this.props.favourites.find((fav) => {return fav.title === movie.title})
                                    }
                                    >
                                    </DoubleNotification>
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