import React from "react";
import { connect } from "react-redux";
import { fetchPostsWithRedux } from "../actions/productActions";
import {bindActionCreators} from 'redux';

class ProductList extends React.Component {
    componentDidMount(){
        this.props.fetchPostsWithRedux()
    }
    render(){
        return (
            <ul>
                <li>{/*this.props.posts[0].title*/}</li>

                {/*
                this.props.posts.map((post) =>{
                    return(
                        <li>{post.title}</li>
                    )
                })
            */}
            </ul>
        )
    }
}

function mapStateToProps(state){
    console.log("state.products.posts", state.products.posts); // there are posts here but in render() posts are undefined
    return {
        posts: state.products.posts
    }
}

console.log("posts productList", ProductList.posts);

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPostsWithRedux: fetchPostsWithRedux}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList); // this is now a contanier