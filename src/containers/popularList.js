import React from "react";
import { connect } from "react-redux";
import { fetchPopulars } from "../actions/popularActions";
import {bindActionCreators} from 'redux';

class PopularList extends React.Component {
    componentDidMount(){
        this.props.fetchPopulars()
    }
    render(){
        if (this.props.popularMovies) {

            return (
                <ul>
                    {/*
                        this.props.posts.map((post) =>{
                            return(
                                <li key={post.id}>{post.title}</li>
                            )
                        })
                    */}
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
    // if (state) {
    //     console.log("state", state);
    // }
    return {
        popularMovies: state.popularMovies
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPopulars: fetchPopulars}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(PopularList); // this is now a contanier
