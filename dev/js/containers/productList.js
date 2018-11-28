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
    if (state.products[0]) {
        console.log("state.products[0].posts[0].title", state.products[0].posts[0].title); // there are posts here but in render() posts are undefined
        return {
            posts: state.products[0].posts
        }
    } else {
        return {}
    }

}

console.log("posts productList", ProductList.posts);

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPostsWithRedux: fetchPostsWithRedux}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList); // this is now a contanier