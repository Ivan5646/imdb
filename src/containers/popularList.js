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
            page: 1,
            filteredMovies: [],
            emptySearch: true
        };
        this.loadMore = this.loadMore.bind(this);
        this.filterMovies = this.filterMovies.bind(this);
        this.showMovies = this.showMovies.bind(this);
    }

    componentDidMount(){
        this.props.fetchPopulars();
        //this.setState = ({unfilteredMovies: this.props.fetchPopulars()});
    }

    loadMore() {
        this.setState = ({ page: this.state.page += 1 }); // why is this syntax working then?
        this.props.fetchPopulars(this.state.page);
    }

    filterMovies(event) {
        let searchValue = event.target.value === "" ? true : false;
        console.log("filterMovies, searchValue", searchValue);
        this.setState({ emptySearch: searchValue });

        //filter movies to render the array from the state
        this.props.popularMovies.filter((movie) => {
            if (movie.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1) {
                console.log("found", movie.title);
                this.state.filteredMovies.push(movie);
                //return movie;
            }
        });
    }

    showMovies() {
        // test update single state property
        if (this.searchInput) {
            
        }
    }

    generateNum() {
        let myDate = new Date();
        let uniqueNum =  +(new Date(myDate ));
        return uniqueNum;
    }

    render(){
        if (this.props.popularMovies.length) {
            console.log("render, this.state", this.state);
            if (this.state.emptySearch) {
                return (
                    <section className={"movies"}>
                        <h4>{this.props.popularMovies.length}</h4>
                        <input type="text" placeholder="Search" onChange={this.filterMovies}/>
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
                console.log("else false this.emptySearch", this.emptySearch);
                return (
                    <section className={"movies"}>
                        <div className={"movies__block"}>
                            <h2>Filtered</h2>
                            <input type="text" placeholder="Search" onChange={this.filterMovies}/>
                            {
                                this.state.filteredMovies.map((movie) => {
                                    return (
                                        <div className={"movie-card"} key={movie.id + this.generateNum()}>
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
