import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { Link } from 'react-router-dom';
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
        console.log("favourites this.props", this.props);
        if (this.props.favourites.length) {
            return (
                <div>
                    <h3>Favourites</h3>
                    <div className={"movies__block"}>
                        {
                            this.props.favourites.map((movie) => {
                                return (
                                    <div>
                                        <Link to={`/movie/${movie.id}`} component={Movie} key={movie.id} onClick={() => {this.getMovieId(movie.id)}}>
                                            <div className={"movie-card"}>
                                                <div>{movie.title}</div>
                                                <img src={movie.img}></img>
                                            </div>
                                        </Link>
                                        <button onClick={() => {this.removeFromFavourites(movie.id)}}>Remove from favourites</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading favourties...</div>
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