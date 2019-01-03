import {combineReducers} from "redux";
import popularReducer from "./popularReducer";
import movieReducer from "./movieReducer";
import favouritesReducer from "./favouritesReducer";
import searchDbReducer from './searchDbReducer';
import genresReducer from './genresReducer'

const allReducers = combineReducers({ // that will be thrown to the Store
    popularMovies: popularReducer,
    movie: movieReducer,
    favourites: favouritesReducer,
    searchDbResults: searchDbReducer,
    genres: genresReducer
});

export default allReducers;