import {combineReducers} from "redux";
import popularReducer from "./popularReducer";
import searchReducer from "./searchReducer";

const allReducers = combineReducers({ // that will be thrown to the Store
    popularMovies: popularReducer,
    search: searchReducer
});

export default allReducers;