import {combineReducers} from "redux";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";
import movieReducer from "./movieReducer";
import favouritesReducer from "./favouritesReducer";
import searchDbReducer from './searchDbReducer';

const allReducers = combineReducers({ // that will be thrown to the Store
    popularMovies: popularReducer,
    search: searchReducer,
    movie: movieReducer,
    favourites: favouritesReducer,
    searchDbResults: searchDbReducer
});

export default allReducers;