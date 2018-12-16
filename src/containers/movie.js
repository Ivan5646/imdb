import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

class Movie extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <h3>Movie Details</h3>
        )
    }
}

function mapStateToProps(state){
    return {
        search: state.search,
        popularMovies: state.popularMovies.allMovies,
        filteredMovies: state.popularMovies.filteredMovies
    };
}

export default connect(mapStateToProps)(Movie); // this is now a container