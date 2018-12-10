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
        };
        this.loadMore = this.loadMore.bind(this);
        this.filterMovies = this.filterMovies.bind(this);
    }

    componentDidMount(){
        this.props.fetchPopulars();
        //this.setState = ({unfilteredMovies: this.props.fetchPopulars()});
    }

    loadMore() {
        this.setState = ({ page: this.state.page += 1 });
        //this.setState = ({ unfilteredMovies: this.state.unfilteredMovies.concat(this.props.fetchPopulars(this.state.page)) });
        this.props.fetchPopulars(this.state.page);
        console.log("this.state", this.state);
    }

    filterMovies(event) {
        console.log("search string", event.target.value);
        console.log("event.target.value === empty ", event.target.value === "");
        this.props.searchMovies(event.target.value);
    }

    render(){
        console.log("this.props.popularMovies", this.props.popularMovies);
        if (this.props.popularMovies.length) {
            console.log("if, this.props.popularMovies", this.props.popularMovies);
            return (
                <section className={"movies"}>
                    <h4>{this.props.popularMovies.length}</h4>
                    <input type="text" placeholder="Search" onChange={this.filterMovies}/>
                    <div className={"movies__block"}>
                        {
                            this.props.popularMovies.map((movie) =>{
                                return(
                                    <div className={"movie-card"} key={movie.id}>
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
            console.log("else, this.props.popularMovies", this.props.popularMovies);
            return (
                <p>No data</p>
            )
        }
    }
}

function mapStateToProps(state){
    console.log("state", state);
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
