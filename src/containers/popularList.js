import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Waypoint from 'react-waypoint';
import { fetchPopulars } from "../actions/popularActions";

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
        this.loadMore();
    }

    loadMore () {
        this.setState = ({ page: this.state.page += 1 });
        this.props.fetchPopulars(this.state.page);
        console.log("this.state", this.state);
    }

    render(){
        if (this.props.popularMovies.length) {
            console.log("this.props.popularMovies", this.props.popularMovies);
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
                    <p>text random text</p><p>text random text</p><p>text random text</p><p>text random text</p>
                    <p>text random text</p><p>text random text</p><p>text random text</p><p>text random text</p>
                    <p>text random text</p><p>text random text</p><p>text random text</p><p>text random text</p>
                    <p>text random text</p><p>text random text</p><p>text random text</p><p>text random text</p>
                    <Waypoint onEnter={this.loadMore}/>
                </section>
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
        //console.log("state.popularMovies.result.results", state.popularMovies.result.results);
        return {
            popularMovies: state.popularMovies.result.results,
            //currentPage: 0
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
