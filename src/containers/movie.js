import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {fetchMovie} from '../actions/popularActions';

class Movie extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("movie componentDidMount");
        fetchMovie(297802); // have to pass movie id
    }

    render(){
        console.log("movie this.props", this.props);
        return (
            <h3>Movie Details</h3>
        )
    }
}

function mapStateToProps(state){
    console.log("movie state", state);
    return {
        movieId: state.movie.id
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchMovie: fetchMovie}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Movie); // this is now a container