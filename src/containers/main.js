import React from "react";
import {connect} from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PopularList from './popularList'
import Movie from './movie'

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("main test");
        if (this.props.movieId) {
            console.log("main this.props", this.props); // nothing here, though exists in state
        } else {
            console.log("main this.props, no property");
        }
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={PopularList} />
                    <Route path="/movie" component={Movie} />
                </div>
            </BrowserRouter>
        )
    }
}
function mapStateToProps(state){
    console.log("main state.movie.movie", state.movie.movie);
    if (state.movie.movie) {
        movieId: state.movie.movie.adult
    } else {
        movieId: "no id"
    }
}

export default connect(mapStateToProps)(Main);