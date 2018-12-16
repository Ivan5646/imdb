import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PopularList from '../containers/popularList'
import Search from '../components/search'
import Movie from '../containers/movie'


const App = () => (
    <BrowserRouter>
        <div>
            <h3 className={"red"}>Popular Movies</h3>
            <Search />
            <Route exact path="/" component={PopularList} />
            <Route path="/movie" component={Movie} />
        </div>
    </BrowserRouter>
);

export default App;
