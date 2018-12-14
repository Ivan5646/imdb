import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Waypoint from 'react-waypoint';
import { fetchPopulars, searchMovies } from "../actions/popularActions";

class PopularList extends React.Component {

    constructor(props) {
        super(props);
        this.dbLink = "https://image.tmdb.org/t/p/w400";

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
            if (!this.props.searchInput) {
                return (
                    <section className={"movies"}>
                        <h4>{this.props.popularMovies.length}</h4>
                        <div className={"movies__block"}>
                            {
                                this.props.popularMovies.map((movie) => {
                                    return (
                                        <div className={"movie-card"} key={movie.id + this.generateNum()}>
                                            <div>{movie.title}</div>
                                            <img src={`${this.dbLink}${movie.poster_path}`}></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Waypoint onEnter={this.loadMore}/>
                    </section>
                )
            } else {
                return (
                    <section className={"movies"}>
                        <div className={"movies__block"}>
                            <h2>Filtered</h2>
                            {
                                this.props.filteredMovies.map((movie, index) => {
                                    return (
                                        <div className={"movie-card"} key={index}>
                                            <div>{movie.title}</div>
                                            <img src={`${this.dbLink}${movie.poster_path}`}></img>
                                        </div>
                                    )
                                })
                            }
                        </div>
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
    if (state.popularMovies.allMovies) {
        return {
            popularMovies: state.popularMovies.allMovies, // popularMovies is the name of the reducer
            searchInput: state.search.searchInput,
            filteredMovies: state.search.filteredMovies
        }
    } else {
        return {
            popularMovies: state
        }
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPopulars: fetchPopulars, searchMovies: searchMovies}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularList); // this is now a contanier
