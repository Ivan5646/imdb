import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Waypoint from 'react-waypoint';
import { fetchPopulars } from "../actions/popularActions";

class PopularList extends React.Component {

    constructor(props) {
        super(props);

        this.test = this.test.bind(this);
        this.testClick.test = this.testClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchPopulars();
        //this.test();
    }

    test () {
        console.log("test waypoint");
    }

    testClick () {
        console.log("click test");
    }

    render(){
        if (this.props.popularMovies.length) {
            //console.log("this.props.popularMovies[0].title", this.props.popularMovies[0].title);
            console.log("this.props.currentPage", this.props.currentPage);
            return (
                <section>
                    <button onClick={this.testClick}>Test event</button>
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
                    <Waypoint onEnter={this.test}/>
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
        console.log("state.popularMovies.result.results", state.popularMovies.result.results);
        return {
            popularMovies: state.popularMovies.result.results,
            currentPage: 0
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
