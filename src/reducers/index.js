import {combineReducers} from "redux";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";
import movieReducer from "./movieReducer";

const allReducers = combineReducers({ // that will be thrown to the Store
    popularMovies: popularReducer,
    search: searchReducer,
    movie: movieReducer
});

export default allReducers;