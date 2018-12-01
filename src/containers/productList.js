import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/productActions";
import {bindActionCreators} from 'redux';

class ProductList extends React.Component {
    componentDidMount(){
        this.props.fetchPosts()
    }
    render(){
        if (this.props.posts) { // had to check for this.props.posts, not this.props
            console.log("this.props.posts[0]", this.props.posts[0]);

            return (
                <ul>
                    {
                        this.props.posts.map((post) =>{
                            return(
                                <li key={post.id}>{post.title}</li>
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
    if (state.posts.posts) {
        console.log("state.posts.posts.length", state.posts.posts.length);
        console.log("state.posts.posts.[0]", state.posts.posts[0]);
    }
    return {
        posts: state.posts.posts
    }
}

console.log("ProductList.props", ProductList.props);

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPosts: fetchPosts}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList); // this is now a contanier
