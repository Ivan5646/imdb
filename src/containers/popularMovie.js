import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {Movie} from "./movie";
import MovieBottom from "./movieBottom";
import {addToFavourites, fetchGenres} from "../actions/popularActions";
import { getMovieId } from "../actions/popularActions";


class PopularMovie extends React.Component {
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
        console.log("popluarMovie props", this.props);
        if (this.props.genres) {
            return (
                <div className={"movies__block"}>
                    {
                        this.props.popularMovies.map((movie) => {
                            return (
                                <div className={"movie-card"}>
                                    <Link to={`/movie/${movie.id}`} component={Movie} key={movie.id} onClick={() => {this.getMovieId(movie.id)}}>
                                        <div>
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
        } else {
            return (
                <div>Loading...</div>
            )
        }

    }
}

function mapStateToProps(state){
    return {
        genres: state.genres.id,
        favourites: state.favourites.favourites
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addToFavourites: addToFavourites,
        fetchGenres: fetchGenres,
        getMovieId: getMovieId
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularMovie);