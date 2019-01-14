import React from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { Button } from 'reactstrap';
import {addToFavourites, removeFromFavourites} from '../actions/popularActions'

class FavButton extends React.Component {

    constructor(props) {
        super(props);
        this.dbLink = "https://image.tmdb.org/t/p/w300";
    }

    addToFavourites(movie) {
        this.props.addToFavourites(movie);
    }

    removeFromFavourites(movieId){
        this.props.removeFromFavourites(movieId);
    }

    render() {
        if (this.props.favourites.find((fav) => {return fav.title === this.props.movieTitle})) {
            // remove
            return (
                <Button color="secondary" onClick={() => {this.removeFromFavourites(this.props.movieId)}}>Remove from favourites</Button>
            )
        } else {
            // add
            return (
                <Button color="info" onClick={ () => {this.addToFavourites(this.props.favourite)}}
                        className={"favBtn"}
                >
                    Add to favourites
                </Button>
            )
        }
    }
}

function mapStateToProps(state){
    return {
        favourites: state.favourites.favourites
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToFavourites: addToFavourites, removeFromFavourites: removeFromFavourites}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FavButton);