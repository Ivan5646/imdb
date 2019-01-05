import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Waypoint from 'react-waypoint';
import { Link } from 'react-router-dom'
import { fetchPopulars, searchMovies } from "../actions/popularActions";
import { Movie } from './movie';
import PopularMovie from "./popularMovie";
import SearchResults from "./searchResults";

class PopularList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        this.props.fetchPopulars();
    }

    loadMore() {
        this.setState = ({ page: this.state.page += 1 }); // why is this syntax working then?
        this.props.fetchPopulars(this.state.page);
    }

    generateNum() {
        let myDate = new Date();
        let uniqueNum =  +(new Date(myDate ));
        return uniqueNum;
    }

    render(){
        if (this.props.popularMovies.length) {
            if (!this.props.searchResults) {
                console.log("popular props", this.props);
                return (
                    <section className={"movies"}>
                        <h3>Popular Movies</h3>
                        <h4>{this.props.popularMovies.length}</h4>
                        <Link to="/favourites">
                            <div>Favourites</div>
                        </Link>
                        <PopularMovie popularMovies={this.props.popularMovies}></PopularMovie>
                        <Waypoint onEnter={this.loadMore}/>
                    </section>
                )
            } else {
                return (
                    <section className={"movies"}>
                        <SearchResults searchResults={this.props.searchResults}></SearchResults>
                    </section>
                )
            }
        } else {
            return (
                <p>No data</p>
            )
        }
    }
}

function mapStateToProps(state){
    console.log("popularList state", state);
        return {
            popularMovies: state.popularMovies.allMovies, // popularMovies is the name of the reducer
            searchResults: state.searchDbResults.searchResult,
        }

}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        fetchPopulars: fetchPopulars,
        searchMovies: searchMovies,
    }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularList); // this is now a container
