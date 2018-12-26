import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { Link } from 'react-router-dom';
import {getMovieId} from "../actions/popularActions";
import { Movie } from "./Movie"

class Favourites extends React.Component {

    constructor(props) {
        super(props);
    }

    getMovieId(movieId) {
        this.props.getMovieId(movieId);
    }

    render() {
        console.log("favourites this.props", this.props);
        if (this.props.favourites.favourites.length) {
            return (
                <div>
                    <h3>Favourites</h3>
                    <div className={"movies__block"}>
                        {
                            this.props.favourites.favourites.map((movie) => {
                                return (
                                    <div>
                                        <Link to={`/${movie.id}`} component={Movie} key={movie.id} onClick={() => {this.getMovieId(movie.id)}}>
                                            <div className={"movie-card"}>
                                                <div>{movie.title}</div>
                                                <img src={movie.img}></img>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <div>loading favourties...</div>
            )
        }

    }
}

function mapStateToProps(state){
    return {
        favourites: state.favourites
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({getMovieId: getMovieId}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Favourites);