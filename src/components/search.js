import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import {searchMovies} from "../actions/popularActions";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        console.log("handleSearch, event.target.value", event.target.value);

        //filter movies to render the array from the state
        let filteredMovies = this.props.popularMovies.filter((movie) => {
            if (movie.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
                console.log("found", movie.title);
                return movie;
            }
        });

        let searchInput = event.target.value ? true : false;
        this.props.searchMovies(filteredMovies, searchInput);
        console.log("search component, filteredMovies", filteredMovies);
    }

    render() {
        return(
            <input type="text" placeholder="Search movie" onChange={this.handleSearch}/>
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({searchMovies: searchMovies}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Search); // this is now a contanier