import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { getMovieId, removeFromFavourites} from "../actions/popularActions";
import { Movie } from "./Movie"

class Favourites extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //const { handle } = "favourites";
    }

    getMovieId(movieId) {
        this.props.getMovieId(movieId);
    }

    removeFromFavourites(movieId) {
        this.props.removeFromFavourites(movieId);
    }

    render() {
        if (this.props.favourites.length) {
            return (
                <div className={"container-fluid"}>
                    <h3>Favourites</h3>
                    <div className={"movies__block"}>
                        {
                            this.props.favourites.map((movie) => {
                                return (
                                    <div className={"movie-card"}>
                                        <Link to={`/movie/${movie.id}`} component={Movie} key={movie.id} onClick={() => {this.getMovieId(movie.id)}}>
                                            <div>
                                                <img src={movie.img}></img>
                                                <h4 className={"movie-card__title"}>{movie.title}</h4>
                                            </div>
                                        </Link>
                                        <Button color="secondary" onClick={() => {this.removeFromFavourites(movie.id)}}>Remove from favourites</Button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div className={"loading"}>Loading favourties...</div>
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
    return bindActionCreators({getMovieId: getMovieId, removeFromFavourites: removeFromFavourites}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Favourites);