import React from "react";
import { connect } from "react-redux";
import { fetchPopulars } from "../actions/popularActions";
import {bindActionCreators} from 'redux';

class PopularList extends React.Component {
    componentDidMount(){
        this.props.fetchPopulars()
    }
    render(){
        if (this.props.popularMovies.length) {
            //console.log("this.props.popularMovies[0].title", this.props.popularMovies[0].title);
            return (
                <ul>
                    {
                        this.props.popularMovies.map((movie) =>{
                            return(
                                <li key={movie.id}>{movie.title}</li>
                            )
                        })
                    }
                </ul>
            )
        } else {
            return (
                <p>Data is loading</p>
            )
        }
    }
}

function mapStateToProps(state){
    if (state.popularMovies.result) {
        console.log("state.popularMovies.result.results", state.popularMovies.result.results);
        return {
            popularMovies: state.popularMovies.result.results
        }
    } else {
        return {
            popularMovies: state
        }
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPopulars: fetchPopulars}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularList); // this is now a contanier
