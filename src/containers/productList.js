import React from "react";
import { connect } from "react-redux";
import { fetchPostsWithRedux } from "../actions/productActions";
import {bindActionCreators} from 'redux';

class ProductList extends React.Component {
    componentDidMount(){
        this.props.fetchPostsWithRedux()
    }
    render(){
        if (this.props) {
            //console.log("this.props.posts[0] render", this.props.posts[0]); // this.props.posts ok
        }
        return (
            <ul>
                <li>{/*this.props ? this.props[0] : "no props"*/}</li>

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
    console.log("state.products.posts", state.products.posts);
    return {
        posts: state.products.posts
    }
}

console.log("ProductList.props", ProductList.props);

function matchDispatchToProps(dispatch){
    return bindActionCreators({fetchPostsWithRedux: fetchPostsWithRedux}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList); // this is now a contanier
