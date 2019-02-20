import React from "react";
import {connect} from "react-redux";
import { Router, Route } from 'react-router-dom'
import PopularList from './popularList'
import Movie from './movie'
import Favourites from './favourites'
import Header from './header'
import history from '../history';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    getMovieId() {

    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Header>header</Header>
                    <Route exact path="/" component={PopularList} />
                    <Route path="/movie/:handle" component={Movie} />
                    <Route path="/favourites" component={Favourites} />
                </div>
            </Router>
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