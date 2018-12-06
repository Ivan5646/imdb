import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Waypoint from 'react-waypoint';
import { fetchPopulars, loadMore } from "../actions/popularActions";

class PopularList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
        };
        this.loadMore = this.loadMore.bind(this);
    }

    componentDidMount(){
        this.props.fetchPopulars();
    }

    loadMore () {
        this.setState = ({ page: this.state.page += 1 });
        this.props.fetchPopulars(this.state.page);
        console.log("this.state", this.state);
    }

    render(){
        console.log("this.props.popularMovies", this.props.popularMovies);
       // console.log("this.props.morePopularMovies", this.props.morePopularMovies);
        if (this.props.popularMovies.length) {
            console.log("if, this.props.popularMovies", this.props.popularMovies);
            return (
                <section>
                    <ul>
                        {
                            this.props.popularMovies.map((movie) =>{
                                return(
                                    <li key={movie.id}>{movie.title}</li>
                                )
                            })
                        }
                    </ul>
                    <p>text random text</p><p>text random text</p><p>text random text</p><p>text random text</p>
                    <p>text random text</p><p>text random text</p><p>text random text</p><p>text random text</p>
                    <h4>{this.props.popularMovies.length}</h4>
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
        //console.log("state.popularMovies.result.results", state.popularMovies.result.results);
        return {
            popularMovies: state.popularMovies.allMovies, // popularMovies is the name of the reducer
            //morePopularMovies: state.popularMovies.moreMovies ? state.popularMovies.moreMovies : "noData"
        }
    } else {
        return {
            popularMovies: state
        }
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPopulars: fetchPopulars, loadMore: loadMore}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularList); // this is now a contanier
