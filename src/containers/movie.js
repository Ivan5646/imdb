import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { fetchMovie, fetchRecommendations } from '../actions/popularActions';
import { DoubleNotification } from '../components/doubleNotification'

class Movie extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchMovie(this.props.movieId);
        this.props.fetchRecommendations(this.props.movieId);
        //const { handle } = this.props.match.params
    }

    render(){
        if (this.props.movie.movie && this.props.recommendations) {
            return (
                <section>
                    <h4>{this.props.movie.movie.title}</h4>
                    <div>Overview: {this.props.movie.movie.overview}</div>
                    <div>Release date: {this.props.movie.movie.release_date}</div>
                    <div>Budget: {this.props.movie.movie.budget}</div>
                    <DoubleNotification double={
                        this.props.favourites.find((fav) => {return fav.title === this.props.movie.movie.title})
                    }>
                    </DoubleNotification>
                    <h4>Recommendations</h4>
                    <div>{
                        this.props.recommendations.map((movie) => {
                            return (
                                <div>
                                    <div key={movie.id}>{movie.title}</div>
                                </div>
                            )
                        })
                    }</div>
                </section>
            )
        } else {
            return (
                <p>Loading movie...</p>
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