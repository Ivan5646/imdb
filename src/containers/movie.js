import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { fetchMovie, fetchRecommendations } from '../actions/popularActions';
import { DoubleNotification } from '../components/doubleNotification'

class Movie extends React.Component{

    constructor(props){
        super(props);
        this.dbLink = "https://image.tmdb.org/t/p/w300";
    }

    componentDidMount(){
        this.props.fetchMovie(this.props.movieId);
        this.props.fetchRecommendations(this.props.movieId);
        //const { handle } = this.props.match.params
    }

    render(){
        console.log("movie props", this.props.movie.movie);
        if (this.props.movie.movie && this.props.recommendations) {
            return (
                <section className={"container-fluid"}>
                    <div className={"movie-page"}>
                        <img src={`${this.dbLink}${this.props.movie.movie.poster_path}`}></img>
                        <div className={"movie-page__info"}>
                            <h4>{this.props.movie.movie.title}</h4>
                            <h5>Overview</h5>
                            <div>{this.props.movie.movie.overview}</div>
                            <div className={"movie-page__info-blocks"}>
                                <h5>Release date:</h5>
                                <span>{this.props.movie.movie.release_date}</span>
                            </div>
                            <div className={"movie-page__info-blocks"}>
                                <h5>Budget:</h5>
                                <span>{`${this.props.movie.movie.budget / 1000000} million`}</span>
                            </div>
                            <DoubleNotification double={
                                this.props.favourites.find((fav) => {return fav.title === this.props.movie.movie.title})
                            }>
                            </DoubleNotification>
                            <h4>Recommendations</h4>
                            <div className={"movie-page__recommendations"}>{
                                this.props.recommendations.map((movie, index, arr) => {
                                    return (
                                        arr.length-1 !== index ? <div key={movie.id}>{movie.title},</div> : <div key={movie.id}>{movie.title}.</div>

                                    )
                                })
                            }</div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <div>
                    <p>Loading movie... movie page</p>
                </div>
            )
        }
    }
}

function mapStateToProps(state){
    return {
        movieId: state.movie.id,
        movie: state.movie,
        recommendations: state.movie.recommendations,
        favourites: state.favourites.favourites
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchMovie: fetchMovie,fetchRecommendations: fetchRecommendations}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Movie); // this is now a container