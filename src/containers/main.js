import React from "react";
import {connect} from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PopularList from './popularList'
import Movie from './movie'
import Favourites from './favourites'

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    getMovieId() {

    }

    render() {
        console.log("main this.props", this.props);
        if (this.props.movieId) {
            console.log("main this.props.movieId", this.props.movieId); // nothing here, though exists in state
        } else {
            console.log("main this.props, no property");
        }
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={PopularList} />
                    <Route path="/:handle" component={Movie} />
                    <Route path="/favourites" component={Favourites} />
                </div>
            </BrowserRouter>
        )
    }
}
function mapStateToProps(state){
    if (state.movie.movie) {
        return {movieId: state.movie.movie.id}
    } else {
        return {movieId: "no id"}
    }
}

export default connect(mapStateToProps)(Main);