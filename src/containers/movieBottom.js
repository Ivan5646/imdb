import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {addToFavourites} from "../actions/popularActions";
import FavButton  from './favButton'

class MovieBottom extends React.Component {

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
        return (
            <div>
                <div className="genres">
                    {
                        this.renderGenres(this.props.genres, this.props.movieGenres).map(genre => {
                            return (
                                <div>{genre}</div>
                            )
                        })
                    }
                </div>
                <FavButton
                    movieId={this.props.movieId}  /* all these passed in popularMovie. popularMovie -> movieBottom -> favButton  */
                    movieTitle={this.props.movieTitle}
                    favourite={this.props.favourite}
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        //genres: state.genres.id,
        favourites: state.favourites.favourites
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addToFavourites: addToFavourites,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieBottom);